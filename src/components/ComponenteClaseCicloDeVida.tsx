import { Component } from "react"

interface Props {
  contador: number
}

export default class ComponenteClaseCicloDeVida extends Component {
  state: {
    contador: 0
  }
  constructor(props: Props) {
    super(props)
    this.state = { contador: 0 }
    this.incrementaContador = this.incrementaContador.bind(this)
  }
  componentDidMount(): void {
    // Llamadas a APIs
    // Inicializar timeouts/intervals
    // Inicializar listeners
    console.log("Acabo de montarme")
  }
  componentDidUpdate(): void {
    // console.log(prevState)
    // console.log(this.state)
    console.log("acabo de actualizarme")
  }
  componentWillUnmount(): void {
    // Eliminar timeouts/intervals/listeners
    console.log("Voy a desmontarme")
  }
  incrementaContador() {
    this.setState({ ...this.state, contador: this.state.contador + 1 })
  }
  render() {
    const { contador } = this.state
    const { incrementaContador } = this
    return (
      <div>
        <p>ComponenteClaseCicloDeVida</p>
        <button onClick={incrementaContador}>{contador}</button>
      </div>
    )
  }
}
