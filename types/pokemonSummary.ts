import { PokemonSpecies } from "./pokemonSpecies";

type PokemonSummary = Pick<
  PokemonSpecies,
  | "id"
  | "name"
  | "color"
  | "growth_rate"
  | "base_happiness"
  | "capture_rate"
  | "varieties"
> & {
  imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${string}.png`;
};

export type { PokemonSummary };
