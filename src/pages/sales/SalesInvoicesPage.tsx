import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { sales } from '@/data/dummy'

const paymentColor: Record<string, { bg: string; color: string }> = {
  Cash: { bg: 'rgba(16,185,129,0.12)', color: '#34D399' },
  UPI:  { bg: 'rgba(99,102,241,0.12)', color: '#818CF8' },
  Card: { bg: 'rgba(14,165,233,0.12)', color: '#38BDF8' },
}

export default function SalesInvoicesPage() {
  return (
    <div>
      <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          {sales.length} invoices generated today
        </div>
        <button className="pm-btn" style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Download size={13} /> Export CSV
        </button>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileText size={15} style={{ color: 'var(--primary)' }} /> All Invoices
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="pm-table">
            <thead>
              <tr>
                <th>Invoice #</th><th>Customer</th><th>Items</th>
                <th>Total</th><th>Payment</th><th>Cashier</th><th>Time</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((s, i) => (
                <motion.tr key={s.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <td><span className="font-mono text-xs font-semibold" style={{ color: '#10B981' }}>{s.id}</span></td>
                  <td style={{ color: 'var(--text-primary)' }}>{s.customer}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{s.items}</td>
                  <td className="font-bold" style={{ color: 'var(--text-primary)' }}>₹{s.total}</td>
                  <td>
                    <span className="badge" style={{ background: paymentColor[s.payment].bg, color: paymentColor[s.payment].color }}>
                      {s.payment}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{s.cashier}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{s.time}</td>
                  <td>
                    <button style={{ fontSize: 11, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Download size={12} /> PDF
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
