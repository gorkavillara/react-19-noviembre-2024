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
  // const [todos, setTodos] = useState<Todo[]>([])
  // const [inputValue, setInputValue] = useState("")
  const [notaMinima, setNotaMinima] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const actualizaNotaMinima = () => {
    // Obtener el valor del input
    if (!inputRef.current) return

    const valorDelInput = Number(inputRef.current.value)

    setNotaMinima(valorDelInput)
    console.log(valorDelInput)
    console.log(typeof valorDelInput)
  }

  // console.log("Me he renderizado")
  return (
    <>
      <h1>Ejercicios con listas</h1>
      <input
        type="number"
        ref={inputRef}
        min={0}
        max={10}
        // value={inputValue}
        // onChange={e => setInputValue(e.target.value)}
        placeholder="Introduce la nota mínima"
      />
      <button onClick={actualizaNotaMinima}>Buscar</button>
      <ul>
        {alumnos
          .filter((alumno) => alumno.nota >= notaMinima)
          .map((alumno) => (
            <li key={alumno.id}>
              {alumno.id}. {alumno.nombre}: {alumno.nota}
            </li>
          ))}
      </ul>
    </>
  )
}

export default App
