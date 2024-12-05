import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const fetchPokemonDetails = async ({ queryKey }) => {
  const [, url] = queryKey;
  if (!url) {
    throw new Error("Pokemon URL is missing");
  }
  const { data } = await axios.get(url);
  return data;
};

const PokemonDetails = ({ pokemon }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemonDetails", pokemon?.url],
    queryFn: fetchPokemonDetails,
    staleTime: 5 * 60 * 1000,
    enabled: Boolean(pokemon?.url),
  });

  const [cachedImages, setCachedImages] = useState({});

  useEffect(() => {
    if (data?.sprites?.front_default) {
      const img = new Image();
      img.src = data.sprites.front_default;
      setCachedImages((prev) => ({
        ...prev,
        [data.sprites.front_default]: img.src,
      }));
    }
  }, [data]);

  if (isLoading)
    return (
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
    );

  return (
    <div className="bg-gray-50 rounded-lg shadow-inner p-4">
      <div className="text-center">
        <img
          src={
            cachedImages[data.sprites.front_default] ||
            data.sprites.front_default
          }
          alt={data.name}
          className="w-24 h-24 mx-auto"
        />
        <h2 className="text-lg font-semibold text-gray-800 capitalize mt-2">
          {data.name}
        </h2>
        <p className="text-gray-600">
          <span className="font-medium">Height:</span> {data.height}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Weight:</span> {data.weight}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Base Experience:</span>{" "}
          {data.base_experience}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
