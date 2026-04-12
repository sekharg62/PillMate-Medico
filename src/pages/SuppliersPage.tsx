import { motion } from 'framer-motion'
import { Truck, Plus, Star } from 'lucide-react'
import { suppliers } from '@/data/dummy'

export default function SuppliersPage() {
  return (
    <div>
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Truck size={20} style={{ color: 'var(--primary)' }} />Suppliers
          </h1>
          <p className="page-subtitle">Manage your medicine procurement partners.</p>
        </div>
        <button className="pm-btn pm-btn-primary"><Plus size={14} />Add Supplier</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {suppliers.map((s, i) => (
          <motion.div
            key={s.id}
            className="glass glass-hover"
            style={{ padding: 20, cursor: 'pointer' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{s.name}</div>
                <div style={{ fontSize: 11, marginTop: 2, color: 'var(--text-muted)' }}>{s.contact} · {s.city}</div>
              </div>
              <span className="badge" style={{
                background: s.status === 'active' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
                color: s.status === 'active' ? '#34D399' : '#FCA5A5',
              }}>
                {s.status}
              </span>
            </div>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16, fontSize: 12 }}>
              {[
                { label: 'Phone', value: s.phone },
                { label: 'Email', value: s.email },
                { label: 'Total Orders', value: s.totalOrders },
                { label: 'Total Value', value: `₹${s.totalValue.toLocaleString('en-IN')}` },
              ].map(row => (
                <div key={row.label}>
                  <div style={{ color: 'var(--text-muted)' }}>{row.label}</div>
                  <div style={{ fontWeight: 500, marginTop: 2, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.value}</div>
                </div>
              ))}
            </div>

            {/* Rating row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={11} fill={idx < Math.round(s.rating) ? '#F59E0B' : 'none'} stroke={idx < Math.round(s.rating) ? '#F59E0B' : '#475569'} />
                ))}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, marginLeft: 4, color: '#FCD34D' }}>{s.rating}</span>
              <span style={{ fontSize: 11, marginLeft: 'auto', fontFamily: 'monospace', color: 'var(--text-muted)' }}>GST: {s.gst}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
