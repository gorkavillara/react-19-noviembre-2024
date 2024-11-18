import { useTransition, useRef } from "react"

const enviarInfoABackend = async () => {
  return new Promise((res) => {
    setTimeout(() => res(null), 2000)
  })
}

const FormularioTransition = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)
  const formAction = () => {
    // Obtener la información
    // Enviar la información a la API
    startTransition(enviarInfoABackend) // TODO: Revisar los tipos
  }
  return (
    <div>
      <h2>FormularioTransition</h2>
      <form action={formAction} ref={formRef}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" disabled={isPending}>
          Enviar
        </button>
      </form>
    </div>
  )
}
export default FormularioTransition
