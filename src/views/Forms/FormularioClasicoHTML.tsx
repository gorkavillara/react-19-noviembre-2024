const FormularioClasicoHTML = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    console.log(form)

    const formData = new FormData(form)
    const username = formData.get("username")
    const password = formData.get("password")

    console.log({ username, password })
  }
  return (
    <div>
      <h2>FormularioClasico html</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormularioClasicoHTML
