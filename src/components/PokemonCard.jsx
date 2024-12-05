import React, { useState, useEffect } from "react";
import PokemonDetails from "./PokemonDetails";

function PokemonCard({ pokemon, currentPage, searchQuery }) {
  const IMAGE_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    pokemon.url.split("/")[6]
  }.png`;

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setShowDetails(false);
  }, [currentPage, searchQuery]);

  return (
    <div
      className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
      onClick={() => setShowDetails(!showDetails)}
    >
      <h3 className="text-lg font-semibold align-center flex justify-center">
        {pokemon.name}
      </h3>
      <img
        className="w-full h-48 object-contain mx-auto mt-4"
        src={IMAGE_SRC}
        alt={pokemon.name}
      />
      {showDetails && (
        <div className="mt-4">
          <PokemonDetails pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
