import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import { links } from "../assets/constants"
import { NavbarComponent } from "./components/NavbarComponent"

const Layout = () => {
  return (
    <div>
      <NavbarComponent links={links} />
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
