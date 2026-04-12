import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Package2, PackageCheck, AlertTriangle, PackageX } from 'lucide-react'
import { medicines } from '@/data/dummy'

const statusStyle: Record<string, { bg: string; color: string; label: string }> = {
  'in-stock':     { bg: 'rgba(16,185,129,0.12)',  color: '#34D399', label: 'In Stock' },
  'low-stock':    { bg: 'rgba(245,158,11,0.12)',  color: '#FCD34D', label: 'Low Stock' },
  'out-of-stock': { bg: 'rgba(239,68,68,0.12)',   color: '#FCA5A5', label: 'Out of Stock' },
}

export default function InventoryStockPage() {
  const [search, setSearch] = useState('')
  const filtered = medicines.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.sku.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'In Stock',     value: medicines.filter(m => m.status === 'in-stock').length,     color: '#10B981', glow: 'rgba(16,185,129,0.08)',  icon: <PackageCheck size={22} /> },
          { label: 'Low Stock',    value: medicines.filter(m => m.status === 'low-stock').length,    color: '#F59E0B', glow: 'rgba(245,158,11,0.08)',  icon: <AlertTriangle size={22} /> },
          { label: 'Out of Stock', value: medicines.filter(m => m.status === 'out-of-stock').length, color: '#EF4444', glow: 'rgba(239,68,68,0.08)',   icon: <PackageX size={22} /> },
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

      {/* Search + filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: 340 }}>
          <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            className="pm-input"
            style={{ width: '100%', paddingLeft: 32, paddingRight: 12, paddingTop: 8, paddingBottom: 8, fontSize: 12 }}
            placeholder="Search by name or SKU…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button className="pm-btn pm-btn-ghost" style={{ fontSize: 12 }}><Filter size={13} />Filter</button>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title">
            <Package2 size={14} style={{ color: 'var(--primary)' }} />
            All Stock ({filtered.length} items)
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="pm-table">
            <thead><tr>
              <th>Medicine</th><th>SKU</th><th>Category</th>
              <th>Stock</th><th>Min Stock</th><th>Stock Level</th>
              <th>MRP</th><th>Status</th>
            </tr></thead>
            <tbody>
              {filtered.map((m, i) => {
                const pct = Math.min(100, Math.round((m.stock / Math.max(m.minStock * 2, 1)) * 100))
                const s = statusStyle[m.status]
                return (
                  <motion.tr key={m.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                    <td>
                      <div style={{ fontWeight: 500, fontSize: 14, color: 'var(--text-primary)' }}>{m.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.generic}</div>
                    </td>
                    <td><span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--text-muted)' }}>{m.sku}</span></td>
                    <td><span className="badge" style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8' }}>{m.category}</span></td>
                    <td style={{ fontWeight: 600, color: m.stock < m.minStock ? '#F59E0B' : 'var(--text-primary)' }}>{m.stock}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{m.minStock}</td>
                    <td style={{ minWidth: 80 }}>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${pct}%`, background: m.status === 'in-stock' ? '#10B981' : m.status === 'low-stock' ? '#F59E0B' : '#EF4444' }} />
                      </div>
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>₹{m.mrp}</td>
                    <td><span className="badge" style={{ background: s.bg, color: s.color }}>{s.label}</span></td>
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
