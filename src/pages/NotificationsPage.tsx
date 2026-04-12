import { motion } from 'framer-motion'
import { Bell, CheckCheck } from 'lucide-react'
import { notifications } from '@/data/dummy'

const typeStyle: Record<string, { bg: string; color: string; dot: string }> = {
  warning: { bg: 'rgba(245,158,11,0.08)',  color: '#FCD34D', dot: '#F59E0B' },
  success: { bg: 'rgba(16,185,129,0.08)',  color: '#34D399', dot: '#10B981' },
  info:    { bg: 'rgba(14,165,233,0.08)',  color: '#38BDF8', dot: '#0EA5E9' },
  error:   { bg: 'rgba(239,68,68,0.08)',   color: '#FCA5A5', dot: '#EF4444' },
}

export default function NotificationsPage() {
  const unread = notifications.filter(n => !n.read).length

  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Bell size={20} style={{ color: 'var(--primary)' }} />Notifications
          </h1>
          <p className="page-subtitle">{unread} unread notifications.</p>
        </div>
        <button className="pm-btn pm-btn-ghost" style={{ fontSize: 12 }}>
          <CheckCheck size={13} />Mark all as read
        </button>
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {notifications.map((n, i) => {
          const s = typeStyle[n.type]
          return (
            <motion.div
              key={n.id}
              style={{
                borderRadius: 16,
                padding: 16,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                cursor: 'pointer',
                background: n.read ? 'var(--bg-card)' : s.bg,
                border: `1px solid ${n.read ? 'var(--border)' : s.color + '30'}`,
              }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ translateY: -1 }}
            >
              {/* Dot */}
              <div className="glow-dot" style={{ background: n.read ? 'var(--text-muted)' : s.dot, flexShrink: 0, marginTop: 6 }}></div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: n.read ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                    {n.title}
                  </span>
                  {!n.read && (
                    <span className="badge" style={{ background: s.bg, color: s.color, fontSize: 10 }}>New</span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{n.message}</div>
              </div>

              {/* Time */}
              <span style={{ fontSize: 11, flexShrink: 0, color: 'var(--text-muted)' }}>{n.time}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
