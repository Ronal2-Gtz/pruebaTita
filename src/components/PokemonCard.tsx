import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { Pokemon } from '../types/pokemon'

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative w-40 bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-200 cursor-pointer" 
    >
      <span className="absolute top-2 right-3 text-gray-400 font-semibold text-sm z-10">
        #{id}
      </span>
      <div className="h-22 bg-white"></div>
      <div className="relative">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 object-contain absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>
      <div className="text-center pt-10 pb-10 bg-[#EFEFEF] h-14 rounded-t-xl">
        <p className="capitalize p-2">{name}</p>
      </div>
    </div>
  );
}
