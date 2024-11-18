import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <span>Contact</span>
    </div>
  )
}

export default Contact
