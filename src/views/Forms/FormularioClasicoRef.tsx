import { useState } from "react"

interface FormData {
  username: string
  password: string
}

const FormularioClasicoRef = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  })
  console.log("He calculado de nuevo")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div>
      <h2>FormularioClasico</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default FormularioClasicoRef
