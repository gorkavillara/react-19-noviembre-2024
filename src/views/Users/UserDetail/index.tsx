import { useParams } from "react-router-dom"
import { users } from "../../../assets/constants"

const UserDetail = () => {
  const { id } = useParams()
  console.log(id)

  //   const [user] = users.filter(u => u.id === id)
  const user = users.find((u) => u.id === id)
  console.log(user)

  if (!user)
    return <p style={{ fontStyle: "italic" }}>No se ha encontrado el usuario</p>

  return (
    <div>
      <p>Nombre: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>isDeveloper: {user?.isDeveloper ? "Sí" : "No"}</p>
    </div>
  )
}

export default UserDetail
