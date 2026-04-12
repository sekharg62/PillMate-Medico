import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

export interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  color: string
  glow: string
  index: number
}

export default function StatCard({ label, value, icon: Icon, color, glow, index }: StatCardProps) {
  return (
    <motion.div
      className="stat-card fade-in-up"
      style={{ '--card-glow': glow, animationDelay: `${index * 0.05}s` } as React.CSSProperties}
      whileHover={{ translateY: -3 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: glow, color: color, border: `1px solid ${color}30`,
        }}>
          <Icon size={18} />
        </div>
        <div className="glow-dot" style={{ background: color }}></div>
      </div>
      {/* Value */}
      <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4, fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</div>
    </motion.div>
  )
}
