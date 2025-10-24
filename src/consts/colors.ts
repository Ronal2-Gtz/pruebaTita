export const getTypeColor = (type: string): string => {
    switch (type) {
        case 'grass': return 'bg-green-500 '
        case 'poison': return 'bg-purple-600'
        case 'fire': return 'bg-red-500'
        case 'water': return 'bg-blue-500'
        case 'electric': return 'bg-yellow-500'
        case 'psychic': return 'bg-pink-500'
        case 'ice': return 'bg-cyan-400'
        case 'dragon': return 'bg-indigo-600'
        case 'dark': return 'bg-gray-800'
        case 'fairy': return 'bg-pink-300'
        case 'fighting': return 'bg-red-700'
        case 'ground': return 'bg-yellow-600'
        case 'flying': return 'bg-indigo-400'
        case 'bug': return 'bg-green-400'
        case 'rock': return 'bg-yellow-800'
        case 'ghost': return 'bg-purple-700'
        case 'steel': return 'bg-gray-400'
        case 'normal': return 'bg-gray-300'
        default: return 'bg-gray-500'
    }
}

export const getTypeColorHex = (type: string): string => {
    switch (type) {
        case 'grass': return '#22c55e'
        case 'poison': return '#9333ea'
        case 'fire': return '#ef4444'
        case 'water': return '#3b82f6'
        case 'electric': return '#eab308'
        case 'psychic': return '#ec4899'
        case 'ice': return '#22d3ee'
        case 'dragon': return '#4f46e5'
        case 'dark': return '#1f2937'
        case 'fairy': return '#f9a8d4'
        case 'fighting': return '#b91c1c'
        case 'ground': return '#ca8a04'
        case 'flying': return '#60a5fa'
        case 'bug': return '#4ade80'
        case 'rock': return '#92400e'
        case 'ghost': return '#7c3aed'
        case 'steel': return '#9ca3af'
        case 'normal': return '#d1d5db'
        default: return '#6b7280'
    }
}