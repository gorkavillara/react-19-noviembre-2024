import { expect, it, vi } from "vitest"

const multiplica = (a: number, b: number) => a * b
// const divide = (a: number, b: number) => a / b

it("Multiplica correctamente", () => {
    expect(multiplica(5, 7)).toBe(35)
})

it("Se ha llamado dos veces", () => {
    const multiplicaSpied = vi.fn(multiplica)
    // const producto1 = multiplica(1, 2)
    // const producto2 = multiplica(2, 3)
    multiplicaSpied(1, 2)
    const producto2 = multiplicaSpied(2, 3)

    // console.log(producto2)

    // expect(multiplicaSpied).toBeCalled()
    expect(multiplicaSpied).toBeCalledTimes(2)
    expect(producto2).toBe(6)
})