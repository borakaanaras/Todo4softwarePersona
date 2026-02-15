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
        className="flex-1 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-xl bg-blue-500 text-white px-5 py-3 font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        Ekle
      </button>
    </form>
  )
}
