import { gql } from 'graphql-request'


export const GET_POKEMONS_BY_NUMBER = gql`
  query GetPokemons {
    pokemon_v2_pokemon(
      order_by: { id: asc } 
    ) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;


export const GET_POKEMONS_BY_NAME = gql`
  query GetPokemons {
    pokemon_v2_pokemon(
      order_by: { name: asc }  
    ) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
    query GetPokemonByName($name: String!) {
        pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
            id
            name
            height
            weight
            base_experience
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
            }
            pokemon_v2_pokemonsprites {
                sprites
            }
            pokemon_v2_pokemonstats {
                base_stat
                pokemon_v2_stat {
                    name
                }
            }
                
            pokemon_v2_pokemonspecy {
                pokemon_v2_pokemoncolor {
                    name
                }
            }
            
        }
    }
`

