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
      <li className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex gap-2 p-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 rounded-lg border border-slate-300 bg-white text-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-blue-500 text-white px-3 py-2 text-sm font-medium hover:bg-blue-600"
          >
            Kaydet
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg bg-slate-200 text-slate-700 px-3 py-2 text-sm font-medium hover:bg-slate-300"
          >
            İptal
          </button>
        </div>
      </li>
    )
  }

  return (
    <li className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="rounded border-slate-300 text-blue-500 focus:ring-blue-500 bg-white"
        />
        <span
          className={`flex-1 text-slate-800 ${
            todo.completed ? 'line-through text-slate-500' : ''
          }`}
        >
          {todo.text}
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={handleStartEdit}
            className="rounded-lg bg-blue-100 text-blue-700 px-3 py-1.5 text-sm font-medium hover:bg-blue-200"
          >
            Düzenle
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="rounded-lg bg-red-100 text-red-700 px-3 py-1.5 text-sm font-medium hover:bg-red-200"
          >
            Sil
          </button>
        </div>
      </div>
    </li>
  )
}
