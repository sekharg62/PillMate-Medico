import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { Package, AlertTriangle, CalendarX2, Receipt, TrendingUp, IndianRupee, Truck, Users } from 'lucide-react'
import { dummyStats, salesTrend, categoryRevenue, topSelling } from '@/data/dummy'
import StatCard from '@/components/StatCard'
import DateFilter from '@/components/DateFilter'

const fmt = (n: number) => `₹${n.toLocaleString('en-IN')}`
const PIE_COLORS = ['#10B981', '#6366F1', '#F59E0B', '#0EA5E9', '#8B5CF6', '#EF4444']

const stats = [
  { label: 'Total Medicines', value: dummyStats.totalMedicines.toLocaleString(), icon: Package,      color: '#10B981', glow: 'rgba(16,185,129,0.12)' },
  { label: 'Stock Value',     value: fmt(dummyStats.totalStockValue),            icon: IndianRupee,  color: '#6366F1', glow: 'rgba(99,102,241,0.12)' },
  { label: 'Low Stock',       value: dummyStats.lowStock.toString(),             icon: AlertTriangle, color: '#F59E0B', glow: 'rgba(245,158,11,0.12)' },
  { label: 'Expiring Soon',   value: dummyStats.expiringSoon.toString(),         icon: CalendarX2,   color: '#EF4444', glow: 'rgba(239,68,68,0.12)' },
  { label: "Today's Sales",   value: dummyStats.todaySales.toString(),           icon: Receipt,      color: '#0EA5E9', glow: 'rgba(14,165,233,0.12)' },
  { label: "Today's Revenue", value: fmt(dummyStats.todayRevenue),               icon: TrendingUp,   color: '#10B981', glow: 'rgba(16,185,129,0.12)' },
  { label: 'Suppliers',       value: dummyStats.totalSuppliers.toString(),       icon: Truck,        color: '#8B5CF6', glow: 'rgba(139,92,246,0.12)' },
  { label: 'Staff',           value: dummyStats.totalStaff.toString(),           icon: Users,        color: '#F59E0B', glow: 'rgba(245,158,11,0.12)' },
]

const CustomTooltipSales = ({ active, payload, label }: { active?: boolean; payload?: {value:number}[]; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass" style={{ padding: '10px 14px', fontSize: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--text-primary)' }}>{label}</div>
      <div style={{ color: '#10B981' }}>Revenue: {fmt(payload[0].value)}</div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Good morning, Ravi 👋</h1>
          <p className="page-subtitle">Here's what's happening with your pharmacy today.</p>
        </div>
        <DateFilter />
      </div>

      {/* ── Stat Cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>

      {/* ── Charts row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Sales trend */}
        <div className="section-card fade-in-up-delay-1">
          <div className="section-card-header">
            <div className="section-card-title">Sales Trend (Last 7 Days)</div>
            <div style={{ fontSize: 12, padding: '3px 10px', borderRadius: 8, background: 'rgba(16,185,129,0.1)', color: '#10B981' }}>+12.4%</div>
          </div>
          <div className="section-card-body">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={salesTrend}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#10B981" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltipSales />} />
                <Area type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2.5} fill="url(#salesGrad)"
                  dot={{ fill: '#10B981', strokeWidth: 0, r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category pie */}
        <div className="section-card fade-in-up-delay-2">
          <div className="section-card-header">
            <div className="section-card-title">Revenue by Category</div>
          </div>
          <div className="section-card-body">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={categoryRevenue} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={65} innerRadius={38} paddingAngle={3}>
                  {categoryRevenue.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: '#0D1321', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {categoryRevenue.slice(0,4).map((c, i) => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: PIE_COLORS[i] }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{c.name}</span>
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Top selling */}
        <div className="section-card fade-in-up-delay-3">
          <div className="section-card-header">
            <div className="section-card-title">Top Selling Medicines</div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>By quantity</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="pm-table">
              <thead>
                <tr><th>#</th><th>Medicine</th><th>Category</th><th>Units Sold</th><th>Revenue</th></tr>
              </thead>
              <tbody>
                {topSelling.map(m => (
                  <tr key={m.rank}>
                    <td>
                      <span style={{
                        width: 20, height: 20, borderRadius: 6, fontSize: 11, fontWeight: 700,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(16,185,129,0.12)', color: '#10B981',
                      }}>{m.rank}</span>
                    </td>
                    <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{m.name}</td>
                    <td><span className="badge" style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8' }}>{m.category}</span></td>
                    <td style={{ fontWeight: 600, color: '#10B981' }}>{m.qty}</td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{fmt(m.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Daily orders bar chart */}
        <div className="section-card">
          <div className="section-card-header">
            <div className="section-card-title">Daily Orders</div>
          </div>
          <div className="section-card-body">
            <ResponsiveContainer width="100%" height={224}>
              <BarChart data={salesTrend} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0D1321', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12 }} />
                <Bar dataKey="orders" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
