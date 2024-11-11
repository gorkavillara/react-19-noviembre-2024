import { useState } from "react"
import "./App.css"
// import ComponenteClaseCicloDeVida from "./components/ComponenteClaseCicloDeVida";
import ComponenteFuncionalCicloDeVida from "./components/ComponenteFuncionalCicloDeVida"
// import Contador from "./components/Contador";
// import Saludo from "./components/Saludo";
// import ComponenteClase from "./components/ComponenteClase";
// import ComponenteFuncional, { ComponenteFuncional2 } from "./components/ComponenteFuncional";

// const miElemento = <p>Hola me llamo Gorka</p>;

function App() {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible((vis) => !vis)
  return (
    <div>
      {/* <ComponenteClase />
      <ComponenteFuncional />
      <ComponenteFuncional2 /> */}
      {/* <Saludo nombre="Gorka" color="red" />
      <Saludo nombre="Albert" /> */}
      {/* <Contador /> */}
      {/* <ComponenteClaseCicloDeVida /> */}
      {visible ? <ComponenteFuncionalCicloDeVida /> : null}
      {/* {visible ? (
        <button onClick={toggleVisible}>Ocultar</button>
      ) : (
        <button onClick={toggleVisible}>Mostrar</button>
      )} */}
      <button onClick={toggleVisible}>{visible ? "Ocultar" : "Mostrar"}</button>
    </div>
  )
}

export default App
