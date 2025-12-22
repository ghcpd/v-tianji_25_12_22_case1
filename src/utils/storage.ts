const STORAGE_KEY = 'todos'

export function saveTodos(todos: unknown[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (error) {
    console.error('Failed to save todos:', error)
  }
}

export function loadTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Failed to load todos:', error)
  }
  return []
}
