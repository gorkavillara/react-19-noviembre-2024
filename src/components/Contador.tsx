import { useState } from "react"

function aumentaElValor(valorInicial: number) {
    return valorInicial + 1
}

const Contador = () => {
  const [valor, setValor] = useState(15)
  // const valor = estado[0]
  // const funcionParaCambiarElValor = estado[1]
  //   let valor = 0
  function incrementaValor() {
    //   valor++
    setValor((valorAnterior) => valorAnterior + 1) // valor = 28
    setValor(aumentaElValor) // valor = 28
    setValor(function (valorAnterior) { return valorAnterior + 1 }) // valor = 28
    // setValor(valor + 1) // valor = 28
    // setValor(valor + 1) // valor = 28
    console.log(valor) // valor = 28
  }
  return (
    <div>
      <p id="valor">{valor}</p>
      <button onClick={incrementaValor}>Incrementar</button>
    </div>
  )
}

export default Contador
