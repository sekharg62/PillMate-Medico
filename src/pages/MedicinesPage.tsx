import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Pill, MoreVertical } from 'lucide-react'
import { medicines } from '@/data/dummy'

export default function MedicinesPage() {
  const [search, setSearch] = useState('')
  const filtered = medicines.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.generic.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Pill size={20} style={{ color: 'var(--primary)' }} />Medicines
          </h1>
          <p className="page-subtitle">Master medicine catalog with full metadata.</p>
        </div>
        <button className="pm-btn pm-btn-primary"><Plus size={14} />Add Medicine</button>
      </div>

      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
          <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input className="pm-input" style={{ width: '100%', paddingLeft: 36, paddingRight: 12, paddingTop: 8, paddingBottom: 8, fontSize: 12 }}
            placeholder="Search name, generic…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {filtered.map((m, i) => (
          <motion.div
            key={m.id}
            className="glass glass-hover"
            style={{ padding: 20, cursor: 'pointer' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Top row: icon + status */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16,185,129,0.12)', color: '#10B981', flexShrink: 0 }}>
                <Pill size={16} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="badge" style={{
                  fontSize: 10,
                  background: m.status === 'in-stock' ? 'rgba(16,185,129,0.12)' : m.status === 'low-stock' ? 'rgba(245,158,11,0.12)' : 'rgba(239,68,68,0.12)',
                  color: m.status === 'in-stock' ? '#34D399' : m.status === 'low-stock' ? '#FCD34D' : '#FCA5A5',
                }}>
                  {m.status === 'in-stock' ? 'In Stock' : m.status === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                </span>
                <button style={{ padding: 4, borderRadius: 6, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <MoreVertical size={13} />
                </button>
              </div>
            </div>

            {/* Name & generic */}
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', marginBottom: 2 }}>{m.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 14 }}>{m.generic}</div>

            {/* Metadata grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 16, rowGap: 10, fontSize: 12 }}>
              {[
                { label: 'SKU', value: m.sku },
                { label: 'Category', value: m.category },
                { label: 'MRP', value: `₹${m.mrp}` },
                { label: 'Cost', value: `₹${m.costPrice}` },
                { label: 'Stock', value: `${m.stock} ${m.unit}s` },
                { label: 'Manufacturer', value: m.manufacturer },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ color: 'var(--text-muted)' }}>{label}</div>
                  <div style={{ fontWeight: 500, marginTop: 2, color: 'var(--text-secondary)' }}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
