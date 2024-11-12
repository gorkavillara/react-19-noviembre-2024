import { useState } from "react"

const colors = ["red", "yellow", "green", "blue", "white"]

const pickRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

const FormularioCards = () => {
  const [backgroundColor, setBackgroundColor] = useState("#d3d3d3")
  const changeColor = () => {
    const newColor = pickRandomColor()
    setBackgroundColor(newColor)
  }
  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log("Has hecho clic en el botón")
  }
  return (
    <div
      onClick={changeColor}
      style={{
        padding: "1rem",
        backgroundColor,
        borderRadius: "1rem",
      }}
    >
      <input type="text" placeholder="Introduce tu nombre" />
      <br />
      <br />
      <button onClick={handleButtonClick}>Haz clic</button>
    </div>
  )
}

export default FormularioCards
