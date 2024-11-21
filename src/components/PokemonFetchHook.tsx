import { useFetch } from "../hooks/useFetch"

const PokemonFetchHook = ({ pokemonId }: { pokemonId: string }) => {
  const { loading, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  )
  return (
    <div>
      <h3>Pokemon: {pokemonId}</h3>
      {loading && <span>Cargando</span>}
      {(data as boolean) && <span>Datos encontrados</span>}
    </div>
  )
}

export default PokemonFetchHook
