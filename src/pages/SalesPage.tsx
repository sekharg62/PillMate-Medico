import { Outlet } from 'react-router-dom'
import { Receipt, Plus } from 'lucide-react'

export default function SalesPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Receipt size={20} style={{ color: 'var(--primary)' }} />Sales
          </h1>
          <p className="page-subtitle">Sales orders, invoices, and revenue tracking.</p>
        </div>
        <button className="pm-btn pm-btn-primary">
          <Plus size={14} />New Sale
        </button>
      </div>

      {/* Child route content */}
      <Outlet />
    </div>
  )
}
