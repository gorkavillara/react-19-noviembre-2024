const ComponenteEventosTeclado = () => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log(event)
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }

    if (event.key === "Enter") return alert("Has enviado el formulario")
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Introduce tu número de teléfono"
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default ComponenteEventosTeclado
