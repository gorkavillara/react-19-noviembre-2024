import { useState } from "react"
import "./App.css"
import { Home, About, Contact, Counter, FormularioClasico } from "./views"

type Route = "Home" | "About" | "Contact" | "Counter" | "FormularioClasico"

const RouteView = ({ routeName }: { routeName: Route }) => {
  if (routeName === "Home") return <Home />
  if (routeName === "About") return <About />
  if (routeName === "Contact") return <Contact />
  if (routeName === "Counter") return <Counter />
  if (routeName === "FormularioClasico") return <FormularioClasico />

  return <h3>Ruta no encontrada</h3>
}

const App = () => {
  const [route, setRoute] = useState<Route>("FormularioClasico")
  return (
    <div>
      <RouteView routeName={route} />
      {/* {route === "Home" ? <Home /> : null}
      {route === "About" ? <About /> : null}
      {route === "Contact" && <Contact />} */}
      <div style={{ marginTop: "1rem", display: "none" }}>
        <button onClick={() => setRoute("Home")}>Ir a Home</button>
        <button onClick={() => setRoute("About")}>Ir a About</button>
        <button onClick={() => setRoute("Contact")}>Ir a Contact</button>
      </div>
    </div>
  )
}

export default App
