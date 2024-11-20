import { useSearchParams, Navigate, useNavigate } from "react-router-dom"

const Redirect = () => {
  //  Chequear los searchparams
  const [searchParams] = useSearchParams()
  const redirectString = searchParams.get("redirect")
  const needsRedirect = redirectString === "true"

  const navigate = useNavigate()

  if (needsRedirect) return <Navigate to="/" />

  // Si redirect = true -> redireccionamos
  // Si redirect = false -> nos quedamos aquí

  const volverAHome = () => {
    const redireccionar = Math.random() > 0.5
    if (!redireccionar) return
    
    navigate("/")
    // La redirección
    // return <Navigate to="/" />
    // window.location.href = "/"
  }
  return (
    <div>
      <p>No hemos redireccionado</p>
      <button onClick={volverAHome}>¿Volver a la home?</button>

    </div>
  )
}

export default Redirect
