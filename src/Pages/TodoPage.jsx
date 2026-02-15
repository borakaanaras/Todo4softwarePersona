import { useState, useCallback, useEffect } from 'react'
import {
  Layout,
  Header,
  Footer,
  TodoForm,
  TodoList,
  FilterTabs,
} from '../Components'

const STORAGE_KEY = 'todo-app-items'
let nextId = 1

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id > nextId) {
      nextId = Math.max(...parsed.map((t) => t.id)) + 1
    }
    return parsed
  } catch {
    return []
  }
}

function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (_) {}
}

export function TodoPage() {
  const [todos, setTodos] = useState(loadTodos)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [
      ...prev,
      { id: nextId++, text, completed: false },
    ])
  }, [])

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const handleEdit = useCallback((id, text) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text } : t))
    )
  }, [])

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const total = todos.length
  const completed = todos.filter((t) => t.completed).length
  const active = total - completed

  return (
    <Layout>
      <Header />
      <TodoForm onAdd={handleAdd} />
      <FilterTabs current={filter} onChange={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Footer total={total} completed={completed} active={active} />
    </Layout>
  )
}
