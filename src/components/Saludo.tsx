interface Props {
  nombre: string
  color: string
}

function Saludo({ nombre }: Props) {
  return <div>Hola {nombre}</div>
}

export default Saludo
