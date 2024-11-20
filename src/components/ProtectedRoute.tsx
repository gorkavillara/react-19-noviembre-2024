import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  // hacemos comprobación
  const reactUser = localStorage.getItem("reactUser")
  if (!reactUser) return <Navigate to="/" />

  return element
}

export default ProtectedRoute
