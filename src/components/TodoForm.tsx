import { useState, FormEvent } from 'react'

interface TodoFormProps {
  onAdd: (text: string, priority: 'high' | 'medium' | 'low') => void
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text, priority)
      setText('')
      setPriority('medium')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
        className="todo-input"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
        className="priority-select"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" className="add-button">Add</button>
    </form>
  )
}

export default TodoForm
