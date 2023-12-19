import { PokemonSpecies } from "@/types/pokemonSpecies";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemon";

const fetchPokemonSpecies = async (id: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return (await response.json()) as PokemonSpecies;
};

const fetchPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return (await response.json()) as Pokemon;
};

const useGetPokemonDetail = (id: string) => {
  const [detail, setDetail] = useState<{
    species: PokemonSpecies;
    pokemon: Pokemon;
  } | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const [pokemon, species] = await Promise.all([
        fetchPokemon(id),
        fetchPokemonSpecies(id),
      ]);
      setDetail({ pokemon, species });
    };

    fetchPokemonDetail();
  }, [id]);

  return detail;
};

export { useGetPokemonDetail };
