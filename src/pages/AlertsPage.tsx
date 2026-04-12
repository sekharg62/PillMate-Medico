import { motion } from 'framer-motion'
import { AlertTriangle, CalendarX2, RefreshCw, TrendingDown } from 'lucide-react'
import { alerts } from '@/data/dummy'

const severityStyle: Record<string, { bg: string; color: string; border: string }> = {
  critical: { bg: 'rgba(239,68,68,0.1)',  color: '#FCA5A5', border: 'rgba(239,68,68,0.3)' },
  high:     { bg: 'rgba(245,158,11,0.1)', color: '#FCD34D', border: 'rgba(245,158,11,0.3)' },
  medium:   { bg: 'rgba(99,102,241,0.1)', color: '#818CF8', border: 'rgba(99,102,241,0.3)' },
  low:      { bg: 'rgba(16,185,129,0.1)', color: '#34D399', border: 'rgba(16,185,129,0.3)' },
}

function getTypeIcon(type: string) {
  if (type === 'low-stock') return <TrendingDown size={16} />
  if (type === 'expiry' || type === 'expired') return <CalendarX2 size={16} />
  if (type === 'reorder') return <RefreshCw size={16} />
  return <AlertTriangle size={16} />
}

export default function AlertsPage() {
  const critical = alerts.filter(a => a.severity === 'critical').length
  const high     = alerts.filter(a => a.severity === 'high').length

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AlertTriangle size={20} style={{ color: '#F59E0B' }} />Alerts
        </h1>
        <p className="page-subtitle">Expiry warnings, low stock, and reorder reminders.</p>
      </div>

      {/* Severity summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Critical', value: critical, color: '#EF4444', glow: 'rgba(239,68,68,0.1)' },
          { label: 'High',     value: high,     color: '#F59E0B', glow: 'rgba(245,158,11,0.1)' },
          { label: 'Medium',   value: alerts.filter(a => a.severity === 'medium').length, color: '#6366F1', glow: 'rgba(99,102,241,0.1)' },
          { label: 'Low',      value: alerts.filter(a => a.severity === 'low').length,    color: '#10B981', glow: 'rgba(16,185,129,0.1)' },
        ].map(s => (
          <div key={s.label} style={{ padding: 20, borderRadius: 16, background: s.glow, border: `1px solid ${s.color}25` }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Alert list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {alerts.map((alert, i) => {
          const s = severityStyle[alert.severity]
          return (
            <motion.div
              key={alert.id}
              style={{
                borderRadius: 16,
                padding: 16,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                background: s.bg,
                border: `1px solid ${s.border}`,
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              {/* Icon bubble */}
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 2,
                background: s.bg, color: s.color, border: `1px solid ${s.border}`,
              }}>
                {getTypeIcon(alert.type)}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>{alert.medicine}</span>
                  <span className="badge" style={{ background: s.bg, color: s.color, textTransform: 'capitalize' }}>{alert.severity}</span>
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                    {alert.type.replace('-', ' ')}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{alert.detail}</div>
              </div>

              {/* Time */}
              <span style={{ fontSize: 11, flexShrink: 0, color: 'var(--text-muted)' }}>{alert.time}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
