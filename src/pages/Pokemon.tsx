import { CiSearch } from "react-icons/ci"
import { PokemonCard } from "../components/PokemonCard"
import { SortMenu } from "../components/SortMenu"
import usePokemonsAscByName from "../hooks/usePokemonAscByName";
import usePokemonsAscByNumber from "../hooks/usePokemonAscByNumber";
import { useState, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { Loading } from "../components/Loading";

const Pokemon = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<'number' | 'name'>('number');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const { data: pokemonsByName, isLoading: loadingByName, isError: errorByName } = usePokemonsAscByName();
    const { data: pokemonsByNumber, isLoading: loadingByNumber, isError: errorByNumber } = usePokemonsAscByNumber();

    const pokemonsData = sortBy === 'name' ? pokemonsByName : pokemonsByNumber;
    const isLoading = sortBy === 'name' ? loadingByName : loadingByNumber;
    const isError = sortBy === 'name' ? errorByName : errorByNumber;

    const filteredPokemons = useMemo(() => {
        if (!pokemonsData) return [];
        if (debouncedSearchTerm.trim()) {
            return pokemonsData.filter((pokemon: any) =>
                pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
        }

        return pokemonsData;
    }, [pokemonsData, debouncedSearchTerm]);

    if (isLoading) <Loading />

    if (isError) {
        return <div>Error loading Pokémon data</div>;
    }

    return (
        <div className="h-screen flex flex-col px-2 sm:px-4 lg:px-6 py-3 gap-4 sm:gap-6 lg:gap-7">
            <div className="px-1 sm:px-3">
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        Pokédex
                    </h1>
                    <div className="grid grid-cols-12 gap-2 sm:gap-4 mt-4">
                        <div className="relative col-span-10 sm:col-span-10 lg:col-span-11">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border border-gray-300 px-8 sm:px-10 rounded-full bg-white h-8 sm:h-10 w-full text-sm sm:text-base"
                                placeholder="Search Pokémon..." />
                            <CiSearch className="absolute top-2 sm:top-3 left-3 sm:left-4 text-[#DC0A2D] text-sm sm:text-base" />
                        </div>
                        <div className="relative col-span-1">
                            <button
                                onClick={() => setShowMenu(!showMenu)}
                                className="bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <p className="text-[#DC0A2D] text-sm sm:text-base">#</p>
                            </button>

                            <SortMenu
                                isOpen={showMenu}
                                onClose={() => setShowMenu(false)}
                                onSortChange={setSortBy}
                                currentSort={sortBy}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-1 bg-[#FFFFFF] w-full flex-1 rounded-xl p-2 sm:p-4">
                {filteredPokemons.length === 0 && debouncedSearchTerm.trim() ? (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-gray-500 text-base sm:text-lg text-center px-4">No se encontró Pokémon con el nombre "{debouncedSearchTerm}"</p>
                    </div>
                ) : (
                    <div className="flex justify-center w-full pt-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 ">
                            {filteredPokemons.map((pokemon) => (
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pokemon