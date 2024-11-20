import { Link } from "react-router-dom"
import styles from "../Layout.module.css"

interface LinkElement {
  name: string
  url: string
}

export const NavbarComponent = ({ links }: { links: LinkElement[] }) => (
  <nav className={styles.NavBar}>
    {links.map((link) => (
      <Link key={link.url} to={link.url}>{link.name}</Link>
    ))}
  </nav>
)
