import { Todo } from '../App'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return <div className="empty-state">No tasks found</div>
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <span className={`priority-badge priority-${todo.priority}`}>
            {todo.priority}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
