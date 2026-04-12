import { useState, useRef, useEffect } from 'react'
import { Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react'

const options = ['Today', 'This Week', 'This Month', 'Custom']

const fmtDate = (d: Date) => {
  const parts = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).formatToParts(d)
  const dStr = parts.find(p => p.type === 'day')?.value || ''
  const mStr = parts.find(p => p.type === 'month')?.value || ''
  const yStr = parts.find(p => p.type === 'year')?.value || ''
  return `${dStr}-${mStr}-${yStr}`
}

export default function DateFilter() {
  const [active, setActive] = useState('This Month')
  
  const [customStart, setCustomStart] = useState<string>('')
  const [customEnd, setCustomEnd] = useState<string>('')
  
  const [showCustomPicker, setShowCustomPicker] = useState(false)
  const [focus, setFocus] = useState<'start' | 'end'>('start')
  const [viewDate, setViewDate] = useState(new Date())
  
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowCustomPicker(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getDateDisplay = () => {
    const now = new Date()
    if (active === 'Today') return fmtDate(now)
    if (active === 'This Week') {
      const start = new Date(now)
      start.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1))
      let end = new Date(start)
      end.setDate(start.getDate() + 6)
      if (end > now) end = now // Bound end to today
      return `${fmtDate(start)} to ${fmtDate(end)}`
    }
    if (active === 'This Month') {
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = now // Bound end to today
      return `${fmtDate(start)} to ${fmtDate(end)}`
    }
    if (active === 'Custom') {
      if (customStart && customEnd) {
        return `${fmtDate(new Date(customStart))} to ${fmtDate(new Date(customEnd))}`
      }
      return 'Select Dates'
    }
    return ''
  }

  const handleOptionClick = (opt: string) => {
    setActive(opt)
    if (opt === 'Custom') {
      if (!customStart || !customEnd) {
        const now = new Date()
        const start = new Date(now.getFullYear(), now.getMonth(), 1)
        const sStr = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2,'0')}-${String(start.getDate()).padStart(2,'0')}`
        const eStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`
        setCustomStart(sStr)
        setCustomEnd(eStr)
      }
      setShowCustomPicker(true)
    } else {
      setShowCustomPicker(false)
    }
  }

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const handleDayClick = (day: number) => {
    const dateStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    if (focus === 'start') {
      setCustomStart(dateStr)
      setFocus('end')
    } else {
      setCustomEnd(dateStr)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        overflow: 'hidden',
        fontSize: 13,
        fontWeight: 500,
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}>
        {/* Calendar Icon */}
        <div style={{
          padding: '0 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRight: '1px solid var(--border)',
          height: 34, color: 'var(--text-muted)'
        }}>
          <Calendar size={15} />
        </div>
        
        {/* Options */}
        {options.map((opt) => {
          const isActive = active === opt
          return (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              style={{
                padding: '0 14px',
                height: 34,
                border: 'none',
                cursor: 'pointer',
                background: isActive ? 'var(--nav-hover)' : 'transparent',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderRight: '1px solid var(--border)',
                transition: 'background 0.2s, color 0.2s',
                fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              {opt}
            </button>
          )
        })}
        
        {/* Date Display */}
        <div 
          onClick={() => active === 'Custom' && setShowCustomPicker(!showCustomPicker)}
          style={{
            padding: '0 14px',
            height: 34,
            display: 'flex', alignItems: 'center',
            color: 'var(--text-primary)',
            fontSize: 13,
            cursor: active === 'Custom' ? 'pointer' : 'default',
            background: showCustomPicker ? 'var(--nav-hover)' : 'transparent',
          }}
        >
          {getDateDisplay()}
        </div>
      </div>

      {/* Custom Picker Popover */}
      {showCustomPicker && active === 'Custom' && (
        <div ref={pickerRef} style={{
          position: 'absolute', top: '100%', right: 0, marginTop: 8,
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: 20, width: 340, zIndex: 100,
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column',
          color: 'var(--text-primary)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Select Date Range</div>
            <button onClick={() => setShowCustomPicker(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Start / End preview boxes */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 16px', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>Start Date</div>
              <div style={{ color: 'var(--primary)', fontSize: 13, fontWeight: 600 }}>{customStart || 'YYYY-MM-DD'}</div>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>→</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>End Date</div>
              <div style={{ color: 'var(--primary)', fontSize: 13, fontWeight: 600 }}>{customEnd || 'YYYY-MM-DD'}</div>
            </div>
          </div>

          {/* Tabs for focus */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <button onClick={() => setFocus('start')} style={{
              flex: 1, padding: '8px 0', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: focus === 'start' ? 'var(--primary)' : 'var(--bg)',
              color: focus === 'start' ? '#fff' : 'var(--text-muted)',
              fontWeight: 600, fontSize: 13, transition: 'all 0.2s',
              boxShadow: focus === 'start' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
            }}>Select Start Date</button>
            <button onClick={() => setFocus('end')} style={{
              flex: 1, padding: '8px 0', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: focus === 'end' ? 'var(--primary)' : 'var(--bg)',
              color: focus === 'end' ? '#fff' : 'var(--text-muted)',
              fontWeight: 600, fontSize: 13, transition: 'all 0.2s',
              boxShadow: focus === 'end' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
            }}>Select End Date</button>
          </div>

          {/* Month selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}><ChevronLeft size={18} /></button>
            <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}><ChevronRight size={18} /></button>
          </div>

          {/* Calendar grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px 0', textAlign: 'center', marginBottom: 20 }}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', paddingBottom: 8 }}>{d}</div>
            ))}
            
            {Array.from({ length: 42 }).map((_, i) => {
              const day = i - getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth()) + 1
              const maxDays = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth())
              const isValid = day > 0 && day <= maxDays
              const dateStr = isValid ? `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}` : null
              
              const now = new Date()
              const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`
              const isFuture = dateStr ? dateStr > todayStr : false
              
              const isSelected = dateStr === customStart || dateStr === customEnd
              
              // Range logic
              let isInRange = false
              if (isValid && dateStr && customStart && customEnd && !isFuture) {
                const currentMs = new Date(dateStr).getTime()
                const sMs = new Date(customStart).getTime()
                const eMs = new Date(customEnd).getTime()
                if (sMs < eMs && currentMs > sMs && currentMs < eMs) isInRange = true
                else if (eMs < sMs && currentMs > eMs && currentMs < sMs) isInRange = true
              }
              
              return (
                <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                  {isValid ? (
                    <button
                      onClick={() => !isFuture && handleDayClick(day)}
                      disabled={isFuture}
                      style={{
                        width: 32, height: 32, borderRadius: isSelected ? 8 : (isInRange ? 4 : 8), border: 'none',
                        cursor: isFuture ? 'not-allowed' : 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: isSelected ? 600 : (isInRange ? 500 : 500),
                        background: isSelected ? 'var(--primary)' : (isInRange ? 'var(--nav-hover)' : 'transparent'),
                        color: isSelected ? '#fff' : (isFuture ? 'var(--text-muted)' : (isInRange ? 'var(--text-primary)' : 'var(--text-secondary)')),
                        opacity: isFuture ? 0.35 : 1,
                        transition: 'all 0.1s'
                      }}
                      onMouseEnter={(e) => { 
                        if (!isSelected && !isFuture) { 
                          e.currentTarget.style.color = 'var(--text-primary)'; 
                          e.currentTarget.style.background = isInRange ? 'var(--border)' : 'var(--nav-hover)' 
                        } 
                      }}
                      onMouseLeave={(e) => { 
                        if (!isSelected && !isFuture) { 
                          e.currentTarget.style.color = isInRange ? 'var(--text-primary)' : 'var(--text-secondary)'; 
                          e.currentTarget.style.background = isInRange ? 'var(--nav-hover)' : 'transparent' 
                        } 
                      }}
                    >
                      {day}
                    </button>
                  ) : <div style={{ width: 32, height: 32 }}></div>}
                </div>
              )
            })}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', margin: '0 -20px 16px -20px' }}></div>

          {/* Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
             <button onClick={() => setShowCustomPicker(false)} style={{
               padding: '8px 16px', borderRadius: 8, background: 'var(--bg)', color: 'var(--text-secondary)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: 13, fontWeight: 500
             }}>Cancel</button>
             <button onClick={() => setShowCustomPicker(false)} style={{
               padding: '8px 16px', borderRadius: 8, background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500
             }}>Apply Filter</button>
          </div>
        </div>
      )}
    </div>
  )
}
