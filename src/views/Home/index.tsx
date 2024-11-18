import { Link, NavLink } from "react-router-dom"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <nav className={styles.NavBar}>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">About</Link>
      </nav>
      <p>Esta es la home</p>
    </div>
  )
}

export default Home
