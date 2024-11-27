import { expect, it, test } from "vitest"

const esMayorDeEdad = (edad: number) => {
  if (edad >= 18) return true
  return false
}

it.only("Probamos que sea mayor de edad", () => {
    const resultado = esMayorDeEdad(25)

    expect(resultado).toBe(true)
})