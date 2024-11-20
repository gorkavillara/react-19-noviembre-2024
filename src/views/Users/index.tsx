import { Link, Outlet } from "react-router-dom"
import { users } from "../../assets/constants"
import Eye from "./icons/eye"

const Users = () => {
  return (
    <div>
      <h3>Users list</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email}){" "}
            <Link to={user.id}>
              <Eye />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default Users
