import type { Pokedex } from "@/types/pokedex";
import { PokemonSpecies } from "@/types/pokemonSpecies";
import { PokemonSummary } from "@/types/pokemonSummary";
import { useEffect, useState } from "react";

const useGetSummaryList = (page: number) => {
  const [summaryList, setSummaryList] = useState<PokemonSummary[]>([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const pokedexResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species?limit=15&offset=${
          (page - 1) * 15
        }`
      );
      const pokedex = (await pokedexResponse.json()) as Pokedex;
      const pokemonSpecies = await Promise.all(
        pokedex.results.map(async ({ url }) => {
          const pokemonSpeciesResponse = await fetch(url);
          return (await pokemonSpeciesResponse.json()) as PokemonSpecies;
        })
      );
      setSummaryList(
        pokemonSpecies.map(
          ({
            base_happiness,
            capture_rate,
            color,
            growth_rate,
            id,
            name,
            varieties,
          }) => ({
            base_happiness,
            capture_rate,
            color,
            growth_rate,
            id,
            imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
              .toString()
              .padStart(3, "0")}.png`,
            name,
            varieties,
          })
        )
      );
    };

    fetchSummary();
  }, [page]);

  return { summaryList };
};

export { useGetSummaryList };
