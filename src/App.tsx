import "./App.css";
import Saludo from "./components/Saludo";
// import ComponenteClase from "./components/ComponenteClase";
// import ComponenteFuncional, { ComponenteFuncional2 } from "./components/ComponenteFuncional";

// const miElemento = <p>Hola me llamo Gorka</p>;

function App() {
  return (
    <div>
      {/* <ComponenteClase />
      <ComponenteFuncional />
      <ComponenteFuncional2 /> */}
      <Saludo nombre="Gorka" color="red" />
      <Saludo nombre="Albert" color="red" />
    </div>
  );
}

export default App;
