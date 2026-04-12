import { motion } from 'framer-motion'
import { ClipboardList } from 'lucide-react'
import { auditLogs } from '@/data/dummy'

const actionStyle: Record<string, { bg: string; color: string }> = {
  CREATE: { bg: 'rgba(16,185,129,0.12)',  color: '#34D399' },
  UPDATE: { bg: 'rgba(99,102,241,0.12)',  color: '#818CF8' },
  DELETE: { bg: 'rgba(239,68,68,0.12)',   color: '#FCA5A5' },
}

export default function AuditPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title flex items-center gap-2"><ClipboardList size={20} style={{ color: 'var(--primary)' }} />Audit Logs</h1>
        <p className="page-subtitle">Full activity trail — who did what and when.</p>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <div className="section-card-title">Activity Log</div>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{auditLogs.length} entries</span>
        </div>
        <div className="overflow-x-auto">
          <table className="pm-table">
            <thead><tr><th>Time</th><th>User</th><th>Action</th><th>Entity</th><th>Description</th></tr></thead>
            <tbody>
              {auditLogs.map((log, i) => {
                const s = actionStyle[log.action]
                return (
                  <motion.tr key={log.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <td><span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{log.time}</span></td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                          style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                          {log.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span style={{ color: 'var(--text-primary)', fontSize: 13 }}>{log.user}</span>
                      </div>
                    </td>
                    <td><span className="badge" style={{ background: s.bg, color: s.color }}>{log.action}</span></td>
                    <td>
                      <div className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{log.entity}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{log.entityName}</div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{log.detail}</td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
