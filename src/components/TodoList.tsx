import { useState, use, useMemo } from "react"
import Check from "./common/Check"
import { TodoContext } from "../contexts/TodoContextProvider"
// import { useTodos } from "../hooks/useTodos"

const TodoList = () => {
  const { todos, addTodo, toggleTodo } = use(TodoContext)
  // const { todos } = useTodos()
  const [newTodo, setNewTodo] = useState("")
  const [filterTodos, setFilterTodos] = useState("")
  const handleClick = () => {
    // Obtenemos cierta información de una API de manera asíncrona
    addTodo(newTodo)
  }

  const completeSingleTodo = (id: string) => {
    // TODO: Hacer
    toggleTodo(id)
  }

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.text.includes(filterTodos))
  }, [filterTodos, todos])
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
      <p>Filtro</p>
      <input
        type="text"
        placeholder="filtro"
        value={filterTodos}
        onChange={(e) => setFilterTodos(e.target.value)}
      />
      {todos && (
        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "",
              }}
              onClick={() => completeSingleTodo(todo.id)}
            >
              {todo.text} - <Check />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
