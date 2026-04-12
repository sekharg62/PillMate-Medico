import { motion } from 'framer-motion'
import { Tag, Plus } from 'lucide-react'
import { categories } from '@/data/dummy'

const COLORS = ['#10B981','#6366F1','#F59E0B','#0EA5E9','#8B5CF6','#EF4444','#34D399','#60A5FA']

export default function CategoriesPage() {
  const totalMedicines = categories.reduce((a, c) => a + c.medicines, 0)

  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Tag size={20} style={{ color: 'var(--primary)' }} />Categories
          </h1>
          <p className="page-subtitle">Organize medicines by therapeutic category.</p>
        </div>
        <button className="pm-btn pm-btn-primary"><Plus size={14} />Add Category</button>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {categories.map((cat, i) => {
          const color = COLORS[i % COLORS.length]
          const pct = Math.round((cat.medicines / totalMedicines) * 100)
          return (
            <motion.div
              key={cat.id}
              className="glass glass-hover"
              style={{ padding: 20, cursor: 'pointer' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ translateY: -3 }}
            >
              {/* Icon */}
              <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}18`, color, marginBottom: 16 }}>
                <Tag size={18} />
              </div>

              {/* Name */}
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', marginBottom: 4 }}>{cat.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>{cat.medicines} medicines</div>

              {/* Progress */}
              <div className="progress-bar" style={{ marginBottom: 8 }}>
                <div className="progress-fill" style={{ width: `${pct}%`, background: color }}></div>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
                <span style={{ color: 'var(--text-muted)' }}>{pct}% of catalog</span>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>₹{cat.value.toLocaleString('en-IN')}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
