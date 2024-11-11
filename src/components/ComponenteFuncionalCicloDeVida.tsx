import { useState, useEffect } from "react"

const ComponenteFuncionalCicloDeVida = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("Soy la función del useEffect - componentDidMount")
  }, [])

  useEffect(() => {
    if (contador === 0) return

    console.log("El estado contador ha cambiado")
  }, [contador])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("1 segundo")
    }, 1000)
    return () => {
      clearInterval(interval)
      console.log("Se ejecuta solo cuando se va a desmontar")
    }
  }, [])

  return (
    <div>
      <p>ComponenteFuncionalCicloDeVida</p>
      <button onClick={() => setContador((prev) => prev + 1)}>
        {contador}
      </button>
    </div>
  )
}

export default ComponenteFuncionalCicloDeVida
