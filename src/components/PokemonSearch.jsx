import React, { useState, useEffect } from "react";

const PokemonSearch = ({ searchQuery, setSearchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [localQuery, setSearchQuery]);

  return (
    <div className="my-4">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Search Pokémon..."
      />
    </div>
  );
};

export default PokemonSearch;
