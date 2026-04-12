import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Package, ShoppingCart, Receipt, Users, Truck,
  Bell, FileText, Settings, Pill, Tag, AlertTriangle,
  ClipboardList,
} from 'lucide-react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/inventory', label: 'Inventory', icon: Package },
  { to: '/medicines', label: 'Medicines', icon: Pill },
  { to: '/categories', label: 'Categories', icon: Tag },
  { to: '/sales', label: 'Sales', icon: Receipt },
  { to: '/purchases', label: 'Purchases', icon: ShoppingCart },
  { to: '/suppliers', label: 'Suppliers', icon: Truck },
  { to: '/alerts', label: 'Alerts', icon: AlertTriangle, badge: 5 },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/staff', label: 'Staff', icon: Users },
  { to: '/audit', label: 'Audit Logs', icon: ClipboardList },
  { to: '/notifications', label: 'Notifications', icon: Bell, badge: 3 },
  { to: '/settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  collapsed: boolean
}

export default function Sidebar({ collapsed }: SidebarProps) {
  const location = useLocation()

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>

      {/* ── Logo / header ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start',
        padding: collapsed ? '10px 0' : '14px 16px',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        {collapsed ? (
          /* Icon-only when collapsed */
          <img
            src="/Pillmate.png"
            alt="PillMate"
            style={{ width: 32, height: 32, objectFit: 'contain' }}
          />
        ) : (
          /* Full logo+text image when expanded */
          <motion.img
            src="/Pillmate-png-Photoroom.png"
            alt="PillMate"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            style={{ height: 30, width: '90%', objectFit: 'cover' }}
          />
        )}
      </div>

      {/* ── Nav links ── */}
      <nav style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        padding: '10px 8px',
        display: 'flex', flexDirection: 'column', gap: 2,
      }}>
        {nav.map(({ to, label, icon: Icon, badge }) => {
          const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
          return (
            <NavLink
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                className={`nav-item ${isActive ? 'active' : ''}`}
                whileHover={!isActive ? { x: 3 } : undefined}
                transition={{ duration: 0.15 }}
              >
                {/* Icon + badge */}
                <div style={{ flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Icon size={16} />
                  {badge && (
                    <span style={{
                      position: 'absolute', top: -6, right: -6,
                      minWidth: 15, height: 15, borderRadius: 99,
                      background: 'var(--red)', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 9, fontWeight: 700, padding: '0 3px',
                    }}>
                      {badge}
                    </span>
                  )}
                </div>

                {/* Label — hidden when collapsed */}
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </NavLink>
          )
        })}
      </nav>

    </aside>
  )
}
