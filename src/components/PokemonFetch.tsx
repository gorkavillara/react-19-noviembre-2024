import { useActionState, useRef } from "react"

interface Pokemon {
  id: number
  name: string
}
interface PokemonResponse {
  error: string | null
  pokemon: Pokemon | null
}

const PokemonFetch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const fetchPokemon = async (): Promise<PokemonResponse | null> => {
    // Buscar un pokemon
    if (!inputRef || !inputRef.current) return null
    // Obtener el id del pokemon que queremos buscar
    const pokemonId = inputRef.current.value

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      // fetch(url)
      //   .then((response) => {
      //     console.log(response)
      //     return response.json()
      //   })
      //   .then((data) => console.log(data))
      //   .catch((error) => console.error(error))
      //   .finally(() => {})

      // console.log("hola")

      return {
        error: null,
        pokemon: data,
      }
    } catch (error) {
      console.error(error)
      return {
        error: "Error",
        pokemon: null,
      }
    }
  }
  const [pokemonResponse, formAction] = useActionState(fetchPokemon, null)

  return (
    <div>
      <h3>Buscador de pokemon</h3>
      <form
        action={formAction}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span>Introduce el id de un pokémon</span>
        <input ref={inputRef} type="number" name="pokemonId" />
        <button type="submit">Buscar</button>
        {pokemonResponse?.error && (
          <span style={{ color: "red" }}>{pokemonResponse.error}</span>
        )}
        {pokemonResponse?.pokemon && (
          <>
            <p>Nombre: {pokemonResponse.pokemon.name}</p>
          </>
        )}
      </form>
    </div>
  )
}

export default PokemonFetch
