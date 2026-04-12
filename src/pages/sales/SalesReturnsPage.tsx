import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

const dummyReturns = [
  { id: 'RTN-001', invoice: 'INV-1042', customer: 'Ramesh Kumar', item: 'Paracetamol 500mg', qty: 2, reason: 'Wrong item', refund: 80,  date: '07 Apr, 09:15 AM' },
  { id: 'RTN-002', invoice: 'INV-1037', customer: 'Priya Nair',   item: 'Amoxicillin 250mg', qty: 1, reason: 'Expired stock', refund: 120, date: '07 Apr, 10:40 AM' },
  { id: 'RTN-003', invoice: 'INV-1029', customer: 'Sunita Rao',   item: 'Cetrizine 10mg',    qty: 3, reason: 'Adverse reaction', refund: 45, date: '06 Apr, 03:20 PM' },
]

const reasonColor: Record<string, { bg: string; color: string }> = {
  'Wrong item':       { bg: 'rgba(239,68,68,0.12)',   color: '#F87171' },
  'Expired stock':    { bg: 'rgba(245,158,11,0.12)',  color: '#FCD34D' },
  'Adverse reaction': { bg: 'rgba(99,102,241,0.12)',  color: '#818CF8' },
}

export default function SalesReturnsPage() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
          <RotateCcw size={14} style={{ color: '#F87171' }} />
          {dummyReturns.length} return requests this week
        </div>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <RotateCcw size={15} style={{ color: '#F87171' }} /> Return Requests
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="pm-table">
            <thead>
              <tr>
                <th>Return ID</th><th>Invoice</th><th>Customer</th>
                <th>Item</th><th>Qty</th><th>Reason</th><th>Refund</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dummyReturns.map((r, i) => (
                <motion.tr key={r.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <td><span className="font-mono text-xs font-semibold" style={{ color: '#F87171' }}>{r.id}</span></td>
                  <td><span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{r.invoice}</span></td>
                  <td style={{ color: 'var(--text-primary)' }}>{r.customer}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{r.item}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{r.qty}</td>
                  <td>
                    <span className="badge" style={{ background: reasonColor[r.reason].bg, color: reasonColor[r.reason].color }}>
                      {r.reason}
                    </span>
                  </td>
                  <td className="font-bold" style={{ color: '#34D399' }}>₹{r.refund}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 11 }}>{r.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
