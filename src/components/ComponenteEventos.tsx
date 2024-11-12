import { useState } from "react"

const ComponenteEventos = () => {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = (event: React.MouseEvent) => {
    console.log(event)
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  return (
    <div>
      <button
        style={{ color: isHovering ? "yellow" : "white" }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Hover me
      </button>
      {isHovering ? (
        <p>Estoy haciendo hover</p>
      ) : (
        <p>No estoy haciendo hover</p>
      )}
    </div>
  )
}

export default ComponenteEventos
