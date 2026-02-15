import { useState } from 'react'

export function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleStartEdit = () => {
    setEditText(todo.text)
    setIsEditing(true)
  }

  const handleSave = () => {
    const trimmed = editText.trim()
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  if (isEditing) {
    return (
      <li className="rounded-xl border border-zinc-600 bg-zinc-800 shadow-sm overflow-hidden">
        <div className="flex gap-2 p-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 rounded-lg border border-zinc-600 bg-zinc-700 text-zinc-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            autoFocus
          />
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-amber-500 text-zinc-900 px-3 py-2 text-sm font-medium hover:bg-amber-400"
          >
            Kaydet
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg bg-zinc-600 text-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-500"
          >
            İptal
          </button>
        </div>
      </li>
    )
  }

  return (
    <li className="rounded-xl border border-zinc-600 bg-zinc-800 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="rounded border-zinc-500 text-amber-400 focus:ring-amber-400 bg-zinc-700"
        />
        <span
          className={`flex-1 text-zinc-200 ${
            todo.completed ? 'line-through text-zinc-500' : ''
          }`}
        >
          {todo.text}
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={handleStartEdit}
            className="rounded-lg bg-amber-900/40 text-amber-200 px-3 py-1.5 text-sm font-medium hover:bg-amber-900/60"
          >
            Düzenle
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="rounded-lg bg-red-900/40 text-red-300 px-3 py-1.5 text-sm font-medium hover:bg-red-900/60"
          >
            Sil
          </button>
        </div>
      </div>
    </li>
  )
}
