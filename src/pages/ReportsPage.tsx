import { motion } from 'framer-motion'
import { FileText, Download, BarChart3, Package, Clock, ShoppingCart, TrendingUp, Search } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { salesTrend, medicines } from '@/data/dummy'

const reports = [
  { title: 'Sales Report', desc: 'All transactions by date range', color: '#10B981', icon: BarChart3 },
  { title: 'Stock Report', desc: 'Current inventory stock levels & valuation', color: '#6366F1', icon: Package },
  { title: 'Expiry Report', desc: 'Medicines expiring within 30/60/90 days', color: '#F59E0B', icon: Clock },
  { title: 'Purchase Report', desc: 'Procurement history from all suppliers', color: '#0EA5E9', icon: ShoppingCart },
  { title: 'Profit & Loss', desc: 'Revenue vs cost analysis with margins', color: '#8B5CF6', icon: TrendingUp },
  { title: 'Audit Report', desc: 'Full activity log by user and action', color: '#EF4444', icon: Search },
]

export default function ReportsPage() {
  const stockValue = medicines.reduce((a, m) => a + m.stock * m.costPrice, 0)

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FileText size={20} style={{ color: 'var(--primary)' }} />Reports
        </h1>
        <p className="page-subtitle">Generate and export detailed pharmacy reports.</p>
      </div>

      {/* Report tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {reports.map((r, i) => (
          <motion.div
            key={r.title}
            className="glass glass-hover"
            style={{ padding: 20, cursor: 'pointer' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}30`
              }}>
                <r.icon size={22} />
              </div>
              <button className="pm-btn pm-btn-ghost" style={{ fontSize: 12, padding: '4px 10px' }}>
                <Download size={12} />Export
              </button>
            </div>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', marginBottom: 4 }}>{r.title}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="section-card">
          <div className="section-card-header"><div className="section-card-title">Weekly Revenue Overview</div></div>
          <div className="section-card-body">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={salesTrend} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: any) => [`₹${v.toLocaleString('en-IN')}`, 'Revenue']} contentStyle={{ background: '#0D1321', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12 }} />
                <Bar dataKey="sales" fill="#10B981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header"><div className="section-card-title">Key Summary</div></div>
          <div className="section-card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Total Stock Value', value: `₹${stockValue.toLocaleString('en-IN')}`, color: '#10B981' },
                { label: 'Total Weekly Revenue', value: `₹${salesTrend.reduce((a, s) => a + s.sales, 0).toLocaleString('en-IN')}`, color: '#6366F1' },
                { label: 'Avg Daily Orders', value: Math.round(salesTrend.reduce((a, s) => a + s.orders, 0) / 7).toString(), color: '#0EA5E9' },
                { label: 'Total Medicines', value: medicines.length.toString(), color: '#8B5CF6' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{row.label}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
