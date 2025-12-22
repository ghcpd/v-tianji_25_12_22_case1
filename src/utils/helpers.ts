export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

export function sortTodosByPriority(todos: { priority: string }[]) {
  const priorityOrder = { high: 3, medium: 2, low: 1 }
  return todos.sort((a, b) => {
    const aPriority = priorityOrder[a.priority as keyof typeof priorityOrder] || 0
    const bPriority = priorityOrder[b.priority as keyof typeof priorityOrder] || 0
    return bPriority - aPriority
  })
}

export function getCompletedCount(todos: { completed: boolean }[]): number {
  return todos.filter(todo => todo.completed).length
}
