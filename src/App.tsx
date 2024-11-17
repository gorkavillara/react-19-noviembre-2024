import { useState, useRef } from "react"
import "./App.css"

interface Alumno {
  id: number | string
  nombre: string
  nota: number
}

const alumnos: Alumno[] = [
  {
    id: 1,
    nombre: "Diego",
    nota: 8,
  },
  {
    id: 2,
    nombre: "Antonio",
    nota: 10,
  },
  {
    id: 3,
    nombre: "Adrián",
    nota: 10,
  },
  {
    id: 4,
    nombre: "Albert",
    nota: 8,
  },
]

interface Todo {
  id: number | string
  text: string
  completed: boolean
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <h1>Ejercicios con listas</h1>
      <input
        type="text"
        ref={inputRef}
      />
      <button>Añadir</button>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            {alumno.id}. {alumno.nombre}: {alumno.nota}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
