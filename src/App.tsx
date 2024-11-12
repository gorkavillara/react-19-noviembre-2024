import { useState } from "react"
import "./App.css"
import FormularioEjemplo from "./components/FormularioEjemplo"
import ComponenteReferencias from "./components/ComponenteReferencias"
import ComponenteEventos from "./components/ComponenteEventos"
import ComponenteEventosTeclado from "./components/ComponenteEventosTeclado"
import FormularioCards from "./components/FormularioCards"


function App() {
  const [nombre, setNombre] = useState("")
  function handleClick() {
    console.log("handleClick")
  }
  // function devuelveFuncion() {
  //   return () => {
  //     console.log("función dentro de la función")
  //   }
  // }
  const handleSubmit = (evento: React.FormEvent) => {
    evento.preventDefault()
    console.log(evento)
    // Aquí hacemos las llamadas necesarias a las API
    // fetch('https://api.pruebas.com/usuarios', {
    //   method: "POST",
    //   body: JSON.stringify({})
    // })
    console.log("He enviado el formulario")
  }
  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evento.target.value)
    setNombre(evento.target.value)
  }
  return (
    <div>
      <h4>Eventos & Referencias</h4>
      <FormularioCards />
      {/* <ComponenteEventosTeclado /> */}
      {/* <ComponenteEventos /> */}
      {/* <ComponenteReferencias /> */}
      {/* <FormularioEjemplo /> */}
      {/* <button onClick={handleClick}>Haz clic</button> */}
      {/* <button onClick={handleClick()}>Haz clic</button> */}
      {/* <button onClick={() => console.log("Evento")}>Haz clic</button> */}
      {/* <button onClick={devuelveFuncion()}>Funcion generadora</button> */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form> */}
    </div>
  )
}

export default App
