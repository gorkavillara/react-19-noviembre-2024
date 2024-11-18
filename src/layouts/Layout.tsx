import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
