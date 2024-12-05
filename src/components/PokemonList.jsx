import React, { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import PokemonCard from "./PokemonCard";
import { Grid } from "react-loader-spinner";

const ITEMS_PER_PAGE = 20;
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1300"

const fetchPokemon = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

function PokemonList({ searchQuery, currentPage, onPokemonClick, setFilteredPokemonCount }) {
  const {
    data: pokemonList = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemon,
  });

  const filteredPokemon = useMemo(() => {
    const pokemon = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return pokemon
  }, [pokemonList, searchQuery]);

  useEffect(() => {
    setFilteredPokemonCount(filteredPokemon.length);
  }, [filteredPokemon, setFilteredPokemonCount]);

  const paginatedPokemon = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredPokemon.slice(start, end);
  }, [filteredPokemon, currentPage]);

  if (isLoading) return (
    <div className="flex justify-center items-center">
      <Grid
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
        />
    </div>
  )
  if (error) return <div>Error loading Pokémon.</div>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {paginatedPokemon.map((pokemon, index) => (
        <PokemonCard
          pokemon={pokemon}
          onPokemonClick={() => onPokemonClick(pokemon)}
          key={index}
          searchQuery={searchQuery}
          currentPage={currentPage}
        />
      ))}
    </div>
  );
}

export default PokemonList;
