
import { useParams, useNavigate } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemonDetail'
import { Loading } from '../components/Loading'
import { StatBar } from '../components/StatBar'
import { getTypeColor, getTypeColorHex } from '../consts/colors'

const PokemonDetail = () => {
    const { name } = useParams<{ name: string }>()
    const { data: pokemon, isLoading, isError } = usePokemonDetail(name || '')
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate('/')
    }

    if(isLoading) {
        return <Loading />
    }

    if(isError || !pokemon) {
        return (
            <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white p-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Pokémon Not Found</h2>
                <p className="text-gray-600 mb-6">Sorry, we couldn't find the Pokémon "{name}".</p>
                <button 
                    onClick={handleGoBack}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                    Go Back
                </button>
            </div>
        )
    }

    console.log(JSON.stringify(pokemon, null , 2))

    const primaryTypeColor = pokemon?.types[0] ? getTypeColorHex(pokemon.types[0]) : '#22c55e'

    return (
        <div className="min-h-screen shadow-lg bg-white px-2 pb-2 flex flex-col" style={{ backgroundColor: primaryTypeColor }}>
            <div className="pt-6 pb-40 px-6 relative" >
                <div className="flex justify-between items-center text-white">
                    <button onClick={handleGoBack} className="text-3xl font-bold hover:opacity-80 transition-opacity">←</button>
                    <div className="grow text-center">
                        <h1 className="text-4xl font-bold tracking-wider capitalize">{pokemon?.name}</h1>
                    </div>
                    <span className="text-2xl font-bold">#{String(pokemon?.id || 0).padStart(3, '0')}</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                    <img 
                        src={pokemon?.img} 
                        alt={pokemon?.name} 
                        className="w-48 h-48 object-contain" 
                    />
                </div>
            </div>

            <div className="bg-gray-50 pt-32 rounded-2xl flex-1">
                <div className="flex justify-center space-x-3 mb-6">
                    {pokemon?.types.map((type, index) => (
                        <span 
                            key={index}
                            className={`px-4 py-1 rounded-full text-white font-semibold text-sm capitalize ${getTypeColor(type)}`}
                        >
                            {type}
                        </span>
                    ))}
                </div>

                <h2 className="text-center text-xl font-bold  mb-4" style={{ color: primaryTypeColor }}>About</h2>
                <div className="flex justify-around text-center mb-6">
                    <div>
                        <div className="flex items-center justify-center space-x-1">
                            <span className="text-lg">🛍️</span>
                            <span className="font-semibold text-gray-800">{(pokemon?.weight || 0) / 10} kg</span>
                        </div>
                        <span className="text-xs text-gray-500">Weight</span>
                    </div>
                    <div className="border-l border-gray-300 h-10"></div>
                    <div>
                        <div className="flex items-center justify-center space-x-1">
                            <span className="text-lg">📏</span>
                            <span className="font-semibold text-gray-800">{(pokemon?.height || 0) / 10} m</span>
                        </div>
                        <span className="text-xs text-gray-500">Height</span>
                    </div>
                    <div className="border-l border-gray-300 h-10"></div>
                    <div>
                        {pokemon?.abilities.map((ability, index) => (
                            <div key={index} className="font-semibold text-gray-800 capitalize">{ability}</div>
                        ))}
                        <span className="text-xs text-gray-500">Abilities</span>
                    </div>
                </div>

                <p className="text-center text-gray-600 mb-8 px-4">
                    Base Experience: {pokemon?.base_experience || 0} points. This Pokémon is a great choice for trainers looking for a balanced companion.
                </p>

                <h2 className="text-center text-xl font-bold mb-4" style={{ color: primaryTypeColor }}>Base Stats</h2>
                <div className="space-y-3 px-4">
                    <StatBar 
                        label="HP" 
                        value={pokemon?.stats?.hp || 0} 
                        color={primaryTypeColor} 
                    />
                    <StatBar 
                        label="ATK" 
                        value={pokemon?.stats?.attack || 0} 
                        color={primaryTypeColor} 
                    />
                    <StatBar 
                        label="DEF" 
                        value={pokemon?.stats?.defense || 0} 
                        color={primaryTypeColor} 
                    />
                    <StatBar 
                        label="SATK" 
                        value={pokemon?.stats?.special_attack || 0} 
                        color={primaryTypeColor} 
                    />
                    <StatBar 
                        label="SDEF" 
                        value={pokemon?.stats?.special_defense || 0} 
                        color={primaryTypeColor} 
                    />
                    <StatBar 
                        label="SPD" 
                        value={pokemon?.stats?.speed || 0} 
                        color={primaryTypeColor} 
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail