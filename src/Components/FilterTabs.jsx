const filters = [
  { value: 'all', label: 'Tümü' },
  { value: 'active', label: 'Aktif' },
  { value: 'completed', label: 'Tamamlanan' },
]

export function FilterTabs({ current, onChange }) {
  return (
    <div className="flex gap-1 p-1 rounded-xl bg-slate-100 w-fit mb-4">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            current === value
              ? 'bg-blue-500 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-800 hover:bg-slate-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
