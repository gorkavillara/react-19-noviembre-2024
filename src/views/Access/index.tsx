import { Link, useNavigate } from "react-router-dom"

const Access = () => {
  const navigate = useNavigate()

  const hacerAdmin = () => {
    const user = { role: "admin" }
    localStorage.setItem("reactUser", JSON.stringify(user))
  }

  const back = () => {
    navigate(-1)
  }

  const replace = () => {
    navigate("/", { replace: true })
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/admin">Accede al panel de administración</Link>
      <button onClick={hacerAdmin}>Hacer admin</button>
      <button onClick={back}>Volver atrás</button>
      <button onClick={replace}>Sustituir</button>
    </div>
  )
}

export default Access
