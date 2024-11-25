import { test, it, expect, describe } from "vitest"

const sum = (a: number, b: number) => a + b

test("Probando vitest", () => {
  console.log("Estoy probando vitest")
})

describe.skip("Testing sum function", () => {
  it("Sums the correct way", () => {
    expect(2 + 5).toBe(7)
  })

  it("Sums even negative numbers", () => {
    expect(sum(-1, -3)).toBeLessThan(0)
  })
})

interface Coche {
    marca: string
    modelo: string
    cv: number
}

describe("Testing objects", () => {
    it("Copies the reference", () => {
        const miCoche: Coche = {
            marca: "Volkswagen",
            modelo: "Polo",
            cv: 85
        }
        const otroCoche = miCoche

        expect(otroCoche).toBe(miCoche) // referencia
    })
    it("Copies the reference", () => {
        const miCoche: Coche = {
            marca: "Volkswagen",
            modelo: "Polo",
            cv: 85
        }
        const otroCoche = { ...miCoche }

        expect(otroCoche).not.toBe(miCoche)
        expect(otroCoche).toEqual(miCoche) // valor
    })
})