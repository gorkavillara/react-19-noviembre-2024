import { useState, useContext, use } from "react"
import Check from "./common/Check"
import { TodoContext } from "../contexts/TodoContextProvider"
import { useTodos } from "../hooks/useTodos"

const TodoList = () => {
  const { todos, addTodo } = use(TodoContext)
  // const { todos } = useTodos()
  const [newTodo, setNewTodo] = useState("")
  const handleClick = () => {
    // Obtenemos cierta información de una API de manera asíncrona
    addTodo(newTodo)
  }

  const completeSingleTodo = (id: string) => {
    // TODO: Hacer
    return id
  }
  return (
    <div>
      <h3>TodoList</h3>
      <input
        type="text"
        placeholder="Escribe una nueva tarea"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Nuevo Todo</button>
      {todos && <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "",
            }}
            onClick={() => completeSingleTodo(todo.id)}
            role="todo"
          >
            {todo.text} - <Check />
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default TodoList
