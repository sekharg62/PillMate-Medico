import { motion } from 'framer-motion'
import { Settings, Store, Bell, Shield, Tag, Palette, Database } from 'lucide-react'
import { useState } from 'react'

const sections = [
  {
    icon: Store, title: 'Store Profile', color: '#10B981',
    fields: [
      { label: 'Store Name', value: 'PillMate Pharmacy' },
      { label: 'License Number', value: 'MH-PHM-2024-00142' },
      { label: 'Address', value: '12 Health Avenue, Mumbai - 400001' },
      { label: 'GST Number', value: '27AAAPI1234A1Z5' },
      { label: 'Email', value: 'admin@pillmate.in' },
      { label: 'Phone', value: '+91 98765 43210' },
    ]
  },
  {
    icon: Bell, title: 'Alert Thresholds', color: '#F59E0B',
    fields: [
      { label: 'Low Stock Alert (units)', value: '50' },
      { label: 'Expiry Warning (days)', value: '30' },
      { label: 'Reorder Level (units)', value: '100' },
    ]
  },
  {
    icon: Shield, title: 'Security', color: '#EF4444',
    fields: [
      { label: 'Session Timeout (minutes)', value: '60' },
      { label: '2FA Enabled', value: 'Yes' },
      { label: 'Audit Log Retention', value: '365 days' },
    ]
  },
  {
    icon: Database, title: 'Tax & Billing', color: '#6366F1',
    fields: [
      { label: 'GST Rate (Default)', value: '12%' },
      { label: 'Currency', value: 'INR (₹)' },
      { label: 'Invoice Prefix', value: 'INV' },
    ]
  },
]

const themes = [
  { id: 'emerald', name: 'Emerald', primary: '#10B981', bg: '#070B14' },
  { id: 'violet', name: 'Violet', primary: '#8B5CF6', bg: '#0D0B14' },
  { id: 'sky', name: 'Sky', primary: '#0EA5E9', bg: '#070D14' },
  { id: 'amber', name: 'Amber', primary: '#F59E0B', bg: '#140D07' },
]

const notifPrefs = [
  { label: 'Low Stock Email Alerts', enabled: true },
  { label: 'Expiry SMS Alerts', enabled: true },
  { label: 'Daily Revenue Summary', enabled: false },
  { label: 'Purchase Order Updates', enabled: true },
]

export default function SettingsPage() {
  const [activeTheme, setActiveTheme] = useState(() => localStorage.getItem('pm-color') || 'emerald')

  const changeTheme = (id: string) => {
    setActiveTheme(id)
    localStorage.setItem('pm-color', id)
    document.documentElement.setAttribute('data-theme', id)
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Settings size={20} style={{ color: 'var(--primary)' }} />Settings
        </h1>
        <p className="page-subtitle">Configure your pharmacy store preferences.</p>
      </div>

      {/* Main settings grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {sections.map((sec, i) => (
          <motion.div
            key={sec.title}
            className="section-card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="section-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${sec.color}18`, color: sec.color,
                }}>
                  <sec.icon size={14} />
                </div>
                <div className="section-card-title">{sec.title}</div>
              </div>
              <button className="pm-btn pm-btn-ghost" style={{ fontSize: 12, padding: '4px 10px' }}>Edit</button>
            </div>
            <div className="section-card-body">
              {sec.fields.map(f => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>{f.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Appearance */}
      <motion.div className="section-card" style={{ marginBottom: 20 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
        <div className="section-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(139,92,246,0.12)', color: '#8B5CF6' }}>
              <Palette size={14} />
            </div>
            <div className="section-card-title">Appearance</div>
          </div>
        </div>
        <div className="section-card-body">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {themes.map((theme) => {
              const isActive = activeTheme === theme.id
              return (
                <div key={theme.name} onClick={() => changeTheme(theme.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <div style={{
                    width: 56, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: theme.bg, border: `2px solid ${isActive ? theme.primary : 'var(--border)'}`,
                    opacity: isActive ? 1 : 0.7, transition: 'all 0.2s',
                  }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: theme.primary, boxShadow: isActive ? `0 0 10px ${theme.primary}80` : 'none' }}></div>
                  </div>
                  <span style={{ fontSize: 11, color: isActive ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: isActive ? 600 : 400 }}>{theme.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Notification prefs */}
      <motion.div className="section-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
        <div className="section-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
              <Tag size={14} />
            </div>
            <div className="section-card-title">Notification Preferences</div>
          </div>
        </div>
        <div className="section-card-body">
          {notifPrefs.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{item.label}</span>
              {/* Toggle */}
              <div style={{ width: 40, height: 22, borderRadius: 99, cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 2px', background: item.enabled ? '#10B981' : 'rgba(255,255,255,0.1)' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.3)', marginLeft: item.enabled ? 'auto' : 0, transition: 'margin 0.2s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
