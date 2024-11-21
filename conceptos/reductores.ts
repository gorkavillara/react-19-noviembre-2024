const contadorReductor = (estado: number, { action, payload }: { action: string, payload: number }): number => {
    if (action === "increment") return estado + payload

    return estado
}

const contador = 0

const nuevoContador = contadorReductor(contador, { action: "increment", payload: 2 })

console.log(nuevoContador)