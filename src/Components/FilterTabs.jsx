const filters = [
  { value: 'all', label: 'Tümü' },
  { value: 'active', label: 'Aktif' },
  { value: 'completed', label: 'Tamamlanan' },
]

export function FilterTabs({ current, onChange }) {
  return (
    <div className="flex gap-1 p-1 rounded-xl bg-zinc-700 w-fit mb-4">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            current === value
              ? 'bg-zinc-600 text-zinc-100 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
