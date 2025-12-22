import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { FilterBar } from './components/FilterBar'
import { loadTodos, saveTodos } from './utils/storage'

export interface Todo {
  id: string
  text: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  createdAt: number
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTodo = (text: string, priority: Todo['priority']) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      priority: priority,
      createdAt: Date.now()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo Application</h1>
        <p>A simple task management application</p>
      </header>

      <main className="app-main">
        <TodoForm onAdd={addTodo} />
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <TodoList 
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  )
}

export default App
