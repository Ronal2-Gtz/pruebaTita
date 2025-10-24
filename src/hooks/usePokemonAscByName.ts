import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '../api/graphqlClient'
import { GET_POKEMONS_BY_NAME } from '../services/pokemonServices'
import type { GetPokemonsResponse, PokemonRaw, Pokemon } from '../types/pokemon'

const usePokemonsAscByName = () => {
    return useQuery({
        queryKey: ['pokemonsAscByName'],
        queryFn: async (): Promise<Pokemon[]> => {
            const response: GetPokemonsResponse = await graphqlClient.request(GET_POKEMONS_BY_NAME)

            console.log(response, 'la ')

            return response.pokemon_v2_pokemon.map((pokemon: PokemonRaw): Pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                img: pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default || '',
            }))
        },
    })
}

export default usePokemonsAscByName