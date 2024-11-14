import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Menu } from "primereact/menu"
import { useState } from "react"

const items = [
  { label: "New", icon: "pi pi-plus" },
  { label: "Search", icon: "pi pi-search" },
]

const App = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <h1>Hola mundo desde Prime</h1>
      <Button>Haz clic</Button>
      
      <Menu model={items} />

      <div className="card flex justify-content-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  )
}

export default App
