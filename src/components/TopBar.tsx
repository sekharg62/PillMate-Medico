import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { Bell, Sun, Moon, PanelLeft, PanelLeftClose, LayoutDashboard, FileText, RotateCcw, Package2, Layers, ArrowRightLeft } from 'lucide-react'
import { notifications } from '@/data/dummy'

interface TopBarProps {
  dark: boolean;
  toggleDark: () => void;
  collapsed?: boolean;
  toggleSidebar?: () => void;
}

// Sub-nav tabs per route prefix
const subNavMap: Record<string, { label: string; path: string; icon: React.ReactNode }[]> = {
  '/inventory': [
    { label: 'Stock',     path: '/inventory',           icon: <Package2 size={13} /> },
    { label: 'Batches',   path: '/inventory/batches',   icon: <Layers size={13} /> },
    { label: 'Transfers', path: '/inventory/transfers', icon: <ArrowRightLeft size={13} /> },
  ],
  '/sales': [
    { label: 'Overview',  path: '/sales',          icon: <LayoutDashboard size={13} /> },
    { label: 'Invoices',  path: '/sales/invoices',  icon: <FileText size={13} /> },
    { label: 'Returns',   path: '/sales/returns',   icon: <RotateCcw size={13} /> },
  ],
}

export default function TopBar({ dark, toggleDark, collapsed, toggleSidebar }: TopBarProps) {
  const navigate  = useNavigate()
  const { pathname } = useLocation()
  const unread = notifications.filter(n => !n.read).length

  // Find the matching sub-nav for the current path
  const activePrefix = Object.keys(subNavMap).find(prefix => pathname === prefix || pathname.startsWith(prefix + '/'))
  const tabs = activePrefix ? subNavMap[activePrefix] : []

  return (
    <div className="topbar">

      {/* Left section: Toggle + optional sub-nav tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 10, border: '1px solid var(--border)',
            background: 'var(--bg-card)', color: 'var(--text-secondary)',
            cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)' }}
        >
          {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
        </button>

        {/* Sales sub-nav tabs (only shown on /sales/* pages) */}
        {tabs.length > 0 && (
          <>
            {/* Vertical divider */}
            <div style={{ width: 1, height: 20, background: 'var(--border)' }} />

            {/* Tab row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {tabs.map(tab => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end={tab.path === '/inventory' || tab.path === '/sales'}
                  style={({ isActive }) => ({
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 500,
                    textDecoration: 'none', transition: 'all 0.18s', whiteSpace: 'nowrap',
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(var(--primary-rgb, 16,185,129), 0.10)' : 'transparent',
                    border: isActive ? '1px solid rgba(var(--primary-rgb, 16,185,129), 0.25)' : '1px solid transparent',
                  })}
                >
                  {tab.icon}
                  {tab.label}
                </NavLink>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        {/* Theme toggle */}
        <button
          onClick={toggleDark}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 10, border: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)',
            cursor: 'pointer', transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)' }}
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Notifications */}
        <button
          onClick={() => navigate('/notifications')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', width: 34, height: 34, borderRadius: 10,
            border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)',
            color: 'var(--text-secondary)', cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)' }}
        >
          <Bell size={15} />
          {unread > 0 && (
            <span style={{
              position: 'absolute', top: 2, right: 2,
              minWidth: 14, height: 14, borderRadius: 99,
              background: 'var(--red)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 700, padding: '0 3px',
            }}>
              {unread}
            </span>
          )}
        </button>

        {/* Divider */}
        <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />

        {/* User profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Avatar */}
          <div style={{
            width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 12, color: 'white',
            background: 'linear-gradient(135deg, #10B981, #059669)',
            boxShadow: '0 0 0 2px rgba(16,185,129,0.25)',
          }}>
            RM
          </div>
          {/* Name + role */}
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>Ravi Mehta</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Administrator</div>
          </div>
        </div>

      </div>
    </div>
  )
}
