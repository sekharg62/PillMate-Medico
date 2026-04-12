import { motion } from 'framer-motion'
import { ArrowRightLeft, Plus, CheckCircle2, Clock3, XCircle, Timer, Ban } from 'lucide-react'
import { medicines } from '@/data/dummy'

type TransferStatus = 'completed' | 'pending' | 'cancelled'

const statuses: TransferStatus[] = ['completed', 'pending', 'cancelled', 'completed', 'completed', 'pending', 'cancelled', 'completed', 'pending', 'completed']

const transfers = medicines.slice(0, 10).map((m, i) => ({
  id: `TRF-${String(1000 + i + 1)}`,
  medicine: m.name,
  sku: m.sku,
  qty: 10 + (i * 7) % 50,
  from: ['Central Warehouse', 'Store A', 'Store B', 'Pharmacy Depot'][i % 4],
  to:   ['Store A', 'Store B', 'Central Warehouse', 'Branch C'][(i + 1) % 4],
  date: new Date(2025, i % 12, (i * 3 % 28) + 1).toISOString().slice(0, 10),
  status: statuses[i],
  initiatedBy: ['Ravi Mehta', 'Sneha Rao', 'Arjun Singh', 'Priya Nair'][i % 4],
}))

const statusConfig: Record<TransferStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  completed: { label: 'Completed', color: '#10B981', bg: 'rgba(16,185,129,0.12)',  icon: <CheckCircle2 size={12} /> },
  pending:   { label: 'Pending',   color: '#F59E0B', bg: 'rgba(245,158,11,0.12)',  icon: <Clock3 size={12} /> },
  cancelled: { label: 'Cancelled', color: '#EF4444', bg: 'rgba(239,68,68,0.12)',   icon: <XCircle size={12} /> },
}

export default function InventoryTransfersPage() {
  const completed = transfers.filter(t => t.status === 'completed').length
  const pending   = transfers.filter(t => t.status === 'pending').length
  const cancelled = transfers.filter(t => t.status === 'cancelled').length

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Completed', value: completed, color: '#10B981', glow: 'rgba(16,185,129,0.08)', icon: <CheckCircle2 size={22} /> },
          { label: 'Pending',   value: pending,   color: '#F59E0B', glow: 'rgba(245,158,11,0.08)', icon: <Timer size={22} /> },
          { label: 'Cancelled', value: cancelled, color: '#EF4444', glow: 'rgba(239,68,68,0.08)',  icon: <Ban size={22} /> },
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
        <div className="section-card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="section-card-title">
            <ArrowRightLeft size={14} style={{ color: 'var(--primary)' }} />
            Stock Transfers ({transfers.length} records)
          </div>
          <button className="pm-btn pm-btn-primary" style={{ fontSize: 12 }}>
            <Plus size={13} />New Transfer
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="pm-table">
            <thead><tr>
              <th>Transfer ID</th><th>Medicine</th><th>Qty</th>
              <th>From</th><th>To</th><th>Date</th>
              <th>Initiated By</th><th>Status</th>
            </tr></thead>
            <tbody>
              {transfers.map((t, i) => {
                const cfg = statusConfig[t.status]
                return (
                  <motion.tr key={t.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                    <td><span style={{ fontFamily: 'monospace', fontWeight: 600, fontSize: 12, color: 'var(--primary)' }}>{t.id}</span></td>
                    <td>
                      <div style={{ fontWeight: 500, fontSize: 13, color: 'var(--text-primary)' }}>{t.medicine}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace' }}>{t.sku}</div>
                    </td>
                    <td style={{ fontWeight: 600 }}>{t.qty}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{t.from}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{t.to}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{t.date}</td>
                    <td style={{ fontSize: 12 }}>{t.initiatedBy}</td>
                    <td>
                      <span className="badge" style={{ background: cfg.bg, color: cfg.color, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        {cfg.icon}{cfg.label}
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
