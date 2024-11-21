import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"
import { RootState } from "../app/store"
import { useState } from "react"
import Check from "./common/Check"

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("")
  const todos = useSelector((state: RootState) => state.todos)
  console.log(todos)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addTodo(newTodo))
    setNewTodo("")
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
          <li key={todo.id}>
            {todo.text} -{" "}
            <span style={{ cursor: "pointer" }}>
              <Check />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
