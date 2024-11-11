import { CSSProperties } from "react"

interface Props {
  nombre: string
  color?: string
}

function Saludo({ nombre, color = "yellow" }: Props) {
  const estilo: CSSProperties = { color }
  
  return <div style={estilo}>Hola {nombre}</div>
}

export default Saludo
