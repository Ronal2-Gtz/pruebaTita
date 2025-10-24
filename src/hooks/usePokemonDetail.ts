import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api/graphqlClient";
import { GET_POKEMON_DETAIL } from "../services/pokemonServices";
import type { PokemonRaw } from "../types/pokemon";

export interface PokemonDetailTransformed {
  id: number;
  name: string;
  img: string;
  height: number;
  weight: number;
  base_experience: number;
  types: string[];
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
}

export function usePokemonDetail(name: string) {
  return useQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: async (): Promise<PokemonDetailTransformed | null> => {
      const data = await graphqlClient.request(GET_POKEMON_DETAIL, { name });
      const pokemon = data.pokemon_v2_pokemon[0] as PokemonRaw;
      
      if (!pokemon) return null;


      console.log(pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites)

      // Procesar estadísticas
      const statsMap = new Map();
      pokemon.pokemon_v2_pokemonstats?.forEach(stat => {
        statsMap.set(stat.pokemon_v2_stat.name, stat.base_stat);
      });

      return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.other?.dream_world?.front_default ?? pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default ?? '',
        height: pokemon.height || 0,
        weight: pokemon.weight || 0,
        base_experience: pokemon.base_experience || 0,
        types: pokemon.pokemon_v2_pokemontypes?.map(type => type.pokemon_v2_type.name) || [],
        abilities: pokemon.pokemon_v2_pokemonabilities?.map(ability => ability.pokemon_v2_ability.name) || [],
        stats: {
          hp: statsMap.get('hp') || 0,
          attack: statsMap.get('attack') || 0,
          defense: statsMap.get('defense') || 0,
          special_attack: statsMap.get('special-attack') || 0,
          special_defense: statsMap.get('special-defense') || 0,
          speed: statsMap.get('speed') || 0,
        }
      };
    },
    enabled: !!name,
  });
}