export interface PokemonSprites {
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
        other?: {
            dream_world?: {
                front_default: string | null;
            };
        };
    }
}

export interface PokemonType {
    name: string;
}

export interface PokemonTypeRelation {
    pokemon_v2_type: PokemonType;
}

export interface PokemonAbility {
    name: string;
}

export interface PokemonAbilityRelation {
    pokemon_v2_ability: PokemonAbility;
}

export interface PokemonColor {
    name: string;
}

export interface PokemonSpecies {
    pokemon_v2_pokemoncolor: PokemonColor;
}

export interface PokemonStat {
    name: string;
}

export interface PokemonStatRelation {
    base_stat: number;
    pokemon_v2_stat: PokemonStat;
}

export interface PokemonRaw {
    id: number;
    name: string;
    height?: number;
    weight?: number;
    base_experience?: number;
    pokemon_v2_pokemonsprites: PokemonSprites[];
    pokemon_v2_pokemontypes?: PokemonTypeRelation[];
    pokemon_v2_pokemonabilities?: PokemonAbilityRelation[];
    pokemon_v2_pokemonspecy?: PokemonSpecies;
    pokemon_v2_pokemonstats?: PokemonStatRelation[];
}

export interface Pokemon {
    id: number;
    name: string;
    img: string;
}

export interface PokemonDetail extends Pokemon {
    height: number;
    weight: number;
    base_experience: number;
    types: string[];
    abilities: string[];
    color: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
}

export interface GetPokemonsResponse {
    pokemon_v2_pokemon: PokemonRaw[];
}

export interface GetPokemonDetailResponse {
    pokemon_v2_pokemon: PokemonRaw[];
}