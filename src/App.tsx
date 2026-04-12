import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import InventoryPage from '@/pages/InventoryPage'
import InventoryStockPage from '@/pages/inventory/InventoryStockPage'
import InventoryBatchesPage from '@/pages/inventory/InventoryBatchesPage'
import InventoryTransfersPage from '@/pages/inventory/InventoryTransfersPage'
import MedicinesPage from '@/pages/MedicinesPage'
import SalesPage from '@/pages/SalesPage'
import SalesOverviewPage from '@/pages/sales/SalesOverviewPage'
import SalesInvoicesPage from '@/pages/sales/SalesInvoicesPage'
import SalesReturnsPage from '@/pages/sales/SalesReturnsPage'
import PurchasesPage from '@/pages/PurchasesPage'
import SuppliersPage from '@/pages/SuppliersPage'
import AlertsPage from '@/pages/AlertsPage'
import ReportsPage from '@/pages/ReportsPage'
import StaffPage from '@/pages/StaffPage'
import AuditPage from '@/pages/AuditPage'
import NotificationsPage from '@/pages/NotificationsPage'
import CategoriesPage from './pages/CategoriesPage'
import SettingsPage from './pages/SettingsPage'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Inventory with child routes */}
          <Route path="inventory" element={<InventoryPage />}>
            <Route index element={<InventoryStockPage />} />
            <Route path="batches" element={<InventoryBatchesPage />} />
            <Route path="transfers" element={<InventoryTransfersPage />} />
          </Route>
          <Route path="medicines" element={<MedicinesPage />} />
          <Route path="categories" element={<CategoriesPage />} />

          {/* Sales with child routes */}
          <Route path="sales" element={<SalesPage />}>
            <Route index element={<SalesOverviewPage />} />
            <Route path="invoices" element={<SalesInvoicesPage />} />
            <Route path="returns" element={<SalesReturnsPage />} />
          </Route>

          <Route path="purchases" element={<PurchasesPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="audit" element={<AuditPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

