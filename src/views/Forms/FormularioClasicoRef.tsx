import { useRef } from "react"

const FormularioClasicoRef = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nameRef.current || !passwordRef.current) return

    console.log({
      name: nameRef.current.value,
      password: passwordRef.current.value,
    })
  }
  return (
    <div>
      <h2>FormularioClasico Ref</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input type="text" name="username" ref={nameRef} />
        <input type="password" name="password" ref={passwordRef} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormularioClasicoRef
