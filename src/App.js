import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonList from "./components/PokemonList";
import PokemonSearch from "./components/PokemonSearch";
import Pagination from "./components/Pagination";

const queryClient = new QueryClient();

function App() {
  const [, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [prevSearchQuery, setPrevSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemonCount, setFilteredPokemonCount] = useState(0);

  useEffect(() => {
    if (searchQuery !== prevSearchQuery) {
      setCurrentPage(1);
      setPrevSearchQuery(searchQuery);
    }
  }, [searchQuery, prevSearchQuery]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Global Pokédex</h1>
        <PokemonSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <PokemonList
          onPokemonClick={(pokemon) => setSelectedPokemon(pokemon)}
          searchQuery={searchQuery}
          currentPage={currentPage}
          setFilteredPokemonCount={setFilteredPokemonCount}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPokemon={filteredPokemonCount}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
