import { useState } from 'react'

export function TodoForm({ onAdd, placeholder = 'Yeni görev yazın...' }) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e?.preventDefault?.()
    const trimmed = inputText.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder={placeholder}
        className="flex-1 rounded-xl border border-zinc-600 bg-zinc-800 text-zinc-100 placeholder-zinc-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-xl bg-amber-500 text-zinc-900 px-5 py-3 font-semibold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        Ekle
      </button>
    </form>
  )
}
