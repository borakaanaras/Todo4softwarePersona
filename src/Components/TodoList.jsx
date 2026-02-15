import { TodoItem } from './TodoItem.jsx'
import { EmptyState } from './EmptyState.jsx'

export function TodoList({ todos, filter, onToggle, onEdit, onDelete }) {
  const filtered =
    filter === 'active'
      ? todos.filter((t) => !t.completed)
      : filter === 'completed'
        ? todos.filter((t) => t.completed)
        : todos

  if (todos.length === 0) {
    return <EmptyState />
  }

  if (filtered.length === 0) {
    return (
      <p className="text-center py-8 text-slate-500 text-sm">
        {filter === 'active' && 'Aktif görev yok.'}
        {filter === 'completed' && 'Tamamlanan görev yok.'}
      </p>
    )
  }

  return (
    <ul className="space-y-2" role="list">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
