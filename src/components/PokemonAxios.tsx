import { useActionState, useRef } from "react"
import axios from "axios"
import Spinner from "./common/Spinner"

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  }
}
interface PokemonResponse {
  error: string | null
  pokemon: Pokemon | null
}

const PokemonAxios = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const fetchPokemon = async (): Promise<PokemonResponse | null> => {
    // Buscar un pokemon
    if (!inputRef || !inputRef.current) return null
    // Obtener el id del pokemon que queremos buscar
    const pokemonId = inputRef.current.value

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    try {
      const res = await axios.get(url)
      console.log(res.data)

      return {
        error: null,
        pokemon: res.data,
      }
    } catch (error) {
      console.error(error)
      return {
        error: "Error",
        pokemon: null,
      }
    }
  }
  const [pokemonResponse, formAction, isPending] = useActionState(fetchPokemon, null)

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
            <div>
                <img src={pokemonResponse.pokemon.sprites.front_default} />
                <img src={pokemonResponse.pokemon.sprites.front_shiny} />
            </div>
          </>
        )}
        {isPending && <Spinner />}
      </form>
    </div>
  )
}

export default PokemonAxios
