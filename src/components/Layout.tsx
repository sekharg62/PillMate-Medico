import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'

// Apply dark class and theme immediately (before first render) to avoid flash
const getInitialDark = () => {
  const stored = localStorage.getItem('pm-theme')
  const dark = stored ? stored === 'dark' : true  // default: dark
  
  const color = localStorage.getItem('pm-color') || 'emerald'
  document.documentElement.setAttribute('data-theme', color)

  if (dark) document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
  return dark
}

export default function Layout() {
  const [dark, setDark] = useState(getInitialDark)
  const [collapsed, setCollapsed] = useState(false)

  // Keep html class + localStorage in sync
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('pm-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('pm-theme', 'light')
    }
  }, [dark])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Sidebar collapsed={collapsed} />
      <div className={`main-content${collapsed ? ' collapsed' : ''}`}>
        <TopBar 
          dark={dark} 
          toggleDark={() => setDark(d => !d)} 
          collapsed={collapsed} 
          toggleSidebar={() => setCollapsed(c => !c)} 
        />
        <main className="page-body">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

