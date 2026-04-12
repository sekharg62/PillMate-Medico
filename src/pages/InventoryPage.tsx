import { Outlet } from 'react-router-dom'
import { Package, Plus } from 'lucide-react'

export default function InventoryPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Package size={20} style={{ color: 'var(--primary)' }} />Inventory
          </h1>
          <p className="page-subtitle">Stock levels, batch tracking and transfers across all medicines.</p>
        </div>
        <button className="pm-btn pm-btn-primary">
          <Plus size={14} />Add Batch
        </button>
      </div>

      {/* Child route content */}
      <Outlet />
    </div>
  )
}
