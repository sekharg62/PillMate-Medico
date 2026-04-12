import { motion } from 'framer-motion'
import { Users, Plus, MoreVertical } from 'lucide-react'
import { staff } from '@/data/dummy'

const roleStyle: Record<string, { bg: string; color: string }> = {
  ADMIN:       { bg: 'rgba(239,68,68,0.12)',  color: '#FCA5A5' },
  PHARMACIST:  { bg: 'rgba(16,185,129,0.12)', color: '#34D399' },
  VIEWER:      { bg: 'rgba(99,102,241,0.12)', color: '#818CF8' },
}

export default function StaffPage() {
  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={20} style={{ color: 'var(--primary)' }} />Staff
          </h1>
          <p className="page-subtitle">Manage pharmacy staff and roles.</p>
        </div>
        <button className="pm-btn pm-btn-primary"><Plus size={14} />Add Staff</button>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {staff.map((s, i) => (
          <motion.div
            key={s.id}
            className="glass glass-hover"
            style={{ padding: 20 }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            {/* Top row: avatar + name + menu */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 13, color: 'white', flexShrink: 0,
                  background: 'linear-gradient(135deg, #10B981, #059669)'
                }}>
                  {s.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{s.store}</div>
                </div>
              </div>
              <button style={{ padding: 4, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <MoreVertical size={14} />
              </button>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="badge" style={{ background: roleStyle[s.role].bg, color: roleStyle[s.role].color }}>{s.role}</span>
              <span className="badge" style={{
                background: s.status === 'active' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                color: s.status === 'active' ? '#34D399' : '#FCA5A5',
              }}>{s.status}</span>
            </div>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              {[
                { label: 'Email', value: s.email },
                { label: 'Phone', value: s.phone },
                { label: 'Joined', value: s.joined },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
