// Primera prueba
// 1 - Importar el componente
import { beforeAll, describe, expect, it } from "vitest"
import App from "../App"
import { fireEvent, render, screen } from "@testing-library/react"
describe("Testing Todo List", () => {
  beforeAll(() => {
    render(<App />)
  })
  // 2 - Crear el test
  it("Renders Todo List", () => {
    // 3 - Renderizarlo
    expect(screen).toBeDefined()
  })

  // Segunda prueba: Se pueden añadir tareas
  // 1 - Crear el test
  it("Adds a new todo to the list", () => {
    // 3 - Comprobar cuántos elementos <li> hay
    const initialTodos = screen.getAllByRole("todo")
    console.log(initialTodos.length)
    // 3 - Escribir
    const inputElement = screen.getByPlaceholderText("Escribe una nueva tarea")
    fireEvent.change(inputElement, { target: { value: "Aprender testing" } })
    // 4 - Hacer clic (1 - Obtener el input, 2 - Escribir)
    const buttonElement = screen.getByText("Nuevo Todo")
    fireEvent.click(buttonElement)
    // 5 - Comprobar que hay un elemento más
    const finalTodos = screen.getAllByRole("todo")

    expect(finalTodos.length).toBe(initialTodos.length + 1)
  })
})
