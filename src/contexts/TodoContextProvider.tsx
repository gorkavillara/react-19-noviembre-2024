import { createContext, useState } from "react"
import type { PropsWithChildren } from "react"

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoContextType {
  todos: Todo[]
  addTodo: (newTodo: string) => void
  toggleTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContextType>(null!)

const TodoContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1rf32f23", text: "Sacar al gato", completed: false },
  ])
  const addTodo = (newTodo: string) => {
    setTodos((t) => [
      ...t,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ])
  }
  const toggleTodo = (id: string) => {
    // TODO: Hacer la lógica del toggleTodo (obteniendo un id como parámetro)
    // 1. Cambiamos el estado
    setTodos((t) =>
      t.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed }

        return todo
      })
    )
    //? Tener en cuenta cambiar los tipos del TodoContextType
  }
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
