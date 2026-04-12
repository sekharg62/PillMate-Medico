import { motion } from 'framer-motion'
import { Layers, AlertTriangle, CheckCircle, Clock, Clock as ClockIcon, ClipboardList, ShieldAlert } from 'lucide-react'
import { medicines } from '@/data/dummy'

// Build synthetic batch data from the medicines list
const batches = medicines.flatMap((m, i) => {
  const qty = Math.max(10, m.stock)
  const baseDate = new Date(2024, (i * 3) % 12, ((i * 7) % 28) + 1)
  const expiry  = new Date(baseDate)
  expiry.setMonth(expiry.getMonth() + 6 + (i % 18))
  const mfg = new Date(baseDate)
  mfg.setMonth(mfg.getMonth() - 3)

  return [
    {
      id: `B${String(i + 1).padStart(3, '0')}`,
      medicine: m.name,
      sku: m.sku,
      mfgDate: mfg.toISOString().slice(0, 10),
      expDate: expiry.toISOString().slice(0, 10),
      qty,
      supplier: ['MedSource Inc.', 'PharmaDist', 'BioSupply Co.', 'CureLink Ltd.'][i % 4],
    },
  ]
})

function expiryStatus(dateStr: string) {
  const days = Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000)
  if (days < 0)   return { label: 'Expired',    color: '#EF4444', bg: 'rgba(239,68,68,0.12)',  icon: <AlertTriangle size={12} /> }
  if (days <= 60) return { label: `${days}d left`, color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', icon: <Clock size={12} /> }
  return             { label: 'Good',        color: '#10B981', bg: 'rgba(16,185,129,0.12)', icon: <CheckCircle size={12} /> }
}

export default function InventoryBatchesPage() {
  const expired = batches.filter(b => new Date(b.expDate) < new Date()).length
  const expiringSoon = batches.filter(b => {
    const d = Math.ceil((new Date(b.expDate).getTime() - Date.now()) / 86400000)
    return d >= 0 && d <= 60
  }).length

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Total Batches', value: batches.length, color: '#818CF8', glow: 'rgba(99,102,241,0.08)', icon: <ClipboardList size={22} /> },
          { label: 'Expiring Soon', value: expiringSoon,    color: '#F59E0B', glow: 'rgba(245,158,11,0.08)', icon: <ClockIcon size={22} /> },
          { label: 'Expired',       value: expired,         color: '#EF4444', glow: 'rgba(239,68,68,0.08)',  icon: <ShieldAlert size={22} /> },
        ].map(s => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
            style={{ padding: '20px 24px', borderRadius: 16, background: s.glow, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <div style={{ color: s.color, opacity: 0.85 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title">
            <Layers size={14} style={{ color: 'var(--primary)' }} />
            Batch Tracking ({batches.length} batches)
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="pm-table">
            <thead><tr>
              <th>Batch ID</th><th>Medicine</th><th>SKU</th>
              <th>Mfg Date</th><th>Exp Date</th><th>Qty</th>
              <th>Supplier</th><th>Expiry Status</th>
            </tr></thead>
            <tbody>
              {batches.map((b, i) => {
                const es = expiryStatus(b.expDate)
                return (
                  <motion.tr key={b.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.025 }}>
                    <td><span style={{ fontFamily: 'monospace', fontWeight: 600, fontSize: 12, color: 'var(--primary)' }}>{b.id}</span></td>
                    <td><div style={{ fontWeight: 500, fontSize: 13, color: 'var(--text-primary)' }}>{b.medicine}</div></td>
                    <td><span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--text-muted)' }}>{b.sku}</span></td>
                    <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{b.mfgDate}</td>
                    <td style={{ fontSize: 12, fontWeight: 500, color: es.color }}>{b.expDate}</td>
                    <td style={{ fontWeight: 600 }}>{b.qty}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{b.supplier}</td>
                    <td>
                      <span className="badge" style={{ background: es.bg, color: es.color, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        {es.icon}{es.label}
                      </span>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}
