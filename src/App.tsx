import { useState } from "react"
import "./App.css"
import ComponenteFuncionalCicloDeVida from "./components/ComponenteFuncionalCicloDeVida"
import { generaNombre } from "./lib/utils"

const muyLenta = () => {
  const datos = 10000000
  for (let i = 0; i<datos; i++) {
    const a = 1
  }
}

const funcionAsincrona = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 2000)
  })
}

function App() {
  const [visible, setVisible] = useState(false)
  const [nombre, setNombre] = useState<string | null>(null)
  const toggleVisible = async () => {
    // const miConstante = { nombre: generaNombre() }
    // setNombre(miConstante.nombre)
    // console.time("funcionLenta")
    // muyLenta()
    // console.timeEnd("funcionLenta")
    // setVisible((vis) => !vis)
    await funcionAsincrona()
    console.log(true)
  }
  return (
    <div>
      {visible ? <ComponenteFuncionalCicloDeVida /> : null}
      <button onClick={toggleVisible} id={nombre || "idgenerico"}>{visible ? "Ocultar" : "Mostrar"}</button>
      {nombre && <p>Hola {nombre}</p>}
    </div>
  )
}

export default App
