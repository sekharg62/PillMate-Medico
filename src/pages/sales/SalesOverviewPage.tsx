import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowUpRight } from 'lucide-react'
import { sales } from '@/data/dummy'

const paymentColor: Record<string, { bg: string; color: string }> = {
  Cash: { bg: 'rgba(16,185,129,0.12)', color: '#34D399' },
  UPI:  { bg: 'rgba(99,102,241,0.12)', color: '#818CF8' },
  Card: { bg: 'rgba(14,165,233,0.12)', color: '#38BDF8' },
}

export default function SalesOverviewPage() {
  const [search, setSearch] = useState('')
  const filtered = sales.filter(s =>
    s.id.toLowerCase().includes(search.toLowerCase()) ||
    s.customer.toLowerCase().includes(search.toLowerCase())
  )
  const total = sales.reduce((acc, s) => acc + s.total, 0)

  return (
    <div>
      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: "Today's Orders",    value: sales.length,                                          color: '#10B981', glow: 'rgba(16,185,129,0.1)' },
          { label: "Today's Revenue",   value: `₹${total.toLocaleString('en-IN')}`,                  color: '#6366F1', glow: 'rgba(99,102,241,0.1)' },
          { label: 'Avg. Order Value',  value: `₹${Math.round(total / sales.length).toLocaleString('en-IN')}`, color: '#0EA5E9', glow: 'rgba(14,165,233,0.1)' },
        ].map(s => (
          <div key={s.label} style={{ padding: 20, borderRadius: 16, background: s.glow, border: `1px solid ${s.color}25` }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Search size={14} style={{
            position: 'absolute', left: 12, top: '50%',
            transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none',
          }} />
          <input
            className="pm-input"
            style={{ paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8, fontSize: 12, width: 240 }}
            placeholder="Search invoice or customer…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Invoice table */}
      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title">Recent Invoices</div>
          <button className="text-xs flex items-center gap-1" style={{ color: 'var(--primary)' }}>
            View all <ArrowUpRight size={12} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="pm-table">
            <thead><tr><th>Invoice</th><th>Customer</th><th>Items</th><th>Subtotal</th><th>Discount</th><th>Total</th><th>Payment</th><th>Cashier</th><th>Time</th></tr></thead>
            <tbody>
              {filtered.map((s, i) => (
                <motion.tr key={s.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <td><span className="font-mono text-xs font-semibold" style={{ color: '#10B981' }}>{s.id}</span></td>
                  <td style={{ color: 'var(--text-primary)' }}>{s.customer}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{s.items}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>₹{s.subtotal}</td>
                  <td style={{ color: '#FCD34D' }}>{s.discount > 0 ? `-₹${s.discount}` : '—'}</td>
                  <td className="font-bold" style={{ color: 'var(--text-primary)' }}>₹{s.total}</td>
                  <td>
                    <span className="badge" style={{ background: paymentColor[s.payment].bg, color: paymentColor[s.payment].color }}>
                      {s.payment}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{s.cashier}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{s.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
