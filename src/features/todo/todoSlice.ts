import { createSlice } from "@reduxjs/toolkit"

interface Todo {
  id: string
  text: string
  completed: boolean
}

const initialState: Todo[] = [
  { id: crypto.randomUUID(), text: "Sacar al perro", completed: false },
]

const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.payload, completed: false },
      ]
    },
    completeTodo: (state, action) => {
      // pasará lo que tenga que pasar
      const idACambiar = action.payload
      const nuevoEstado = state.map((todo) =>
        todo.id === idACambiar ? { ...todo, completed: true } : todo
      )
      return nuevoEstado
    },
  },
})

export const { addTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer
