import { useSelector, useDispatch } from "react-redux"
import { addTodo, completeTodo } from "../features/todo/todoSlice"
import { RootState } from "../app/store"
import { useState } from "react"
import Check from "./common/Check"

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("")
  const todos = useSelector((state: RootState) => state.todos)
  console.log(todos)
  const dispatch = useDispatch()

  const handleClick = () => {
    // Obtenemos cierta información de una API de manera asíncrona
    dispatch(addTodo(newTodo)) // Siempre será síncrono
    setNewTodo("")
  }

  const completeSingleTodo = (id: string) => {
    dispatch(completeTodo(id))
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
      <ul>
        {todos.map((todo) => (
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
    </div>
  )
}

export default TodoList
