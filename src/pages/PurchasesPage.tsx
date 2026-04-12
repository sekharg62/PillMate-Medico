import { motion } from 'framer-motion'
import { ShoppingCart, Plus } from 'lucide-react'
import { purchaseOrders } from '@/data/dummy'

const statusStyle: Record<string, { bg: string; color: string }> = {
  received:   { bg: 'rgba(16,185,129,0.12)',  color: '#34D399' },
  pending:    { bg: 'rgba(245,158,11,0.12)',  color: '#FCD34D' },
  'in-transit': { bg: 'rgba(14,165,233,0.12)',  color: '#38BDF8' },
  cancelled:  { bg: 'rgba(239,68,68,0.12)',   color: '#FCA5A5' },
}

export default function PurchasesPage() {
  const totalValue = purchaseOrders.reduce((a, p) => a + p.total, 0)
  const pending = purchaseOrders.filter(p => p.status === 'pending').length

  return (
    <div>
      <div className="page-header flex items-start justify-between">
        <div>
          <h1 className="page-title flex items-center gap-2"><ShoppingCart size={20} style={{ color: 'var(--primary)' }} />Purchase Orders</h1>
          <p className="page-subtitle">Track medicine procurement from suppliers.</p>
        </div>
        <button className="pm-btn pm-btn-primary"><Plus size={14} />New PO</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Total Orders', value: purchaseOrders.length, color: '#10B981' },
          { label: 'Pending', value: pending, color: '#F59E0B' },
          { label: 'In Transit', value: purchaseOrders.filter(p => p.status==='in-transit').length, color: '#0EA5E9' },
          { label: 'Total Value', value: `₹${totalValue.toLocaleString('en-IN')}`, color: '#6366F1' },
        ].map(s => (
          <div key={s.label} className="glass" style={{ padding: 20, borderRadius: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="section-card">
        <div className="section-card-header"><div className="section-card-title">All Purchase Orders</div></div>
        <div className="overflow-x-auto">
          <table className="pm-table">
            <thead><tr><th>PO Number</th><th>Supplier</th><th>Items</th><th>Total</th><th>Status</th><th>Order Date</th><th>Expected</th></tr></thead>
            <tbody>
              {purchaseOrders.map((po, i) => {
                const s = statusStyle[po.status]
                return (
                  <motion.tr key={po.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <td><span className="font-mono text-xs font-semibold" style={{ color: '#6366F1' }}>{po.id}</span></td>
                    <td style={{ color: 'var(--text-primary)' }}>{po.supplier}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{po.items} items</td>
                    <td className="font-bold" style={{ color: 'var(--text-primary)' }}>₹{po.total.toLocaleString('en-IN')}</td>
                    <td><span className="badge capitalize" style={{ background: s.bg, color: s.color }}>{po.status.replace('-', ' ')}</span></td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{po.date}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{po.expectedDate}</td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
