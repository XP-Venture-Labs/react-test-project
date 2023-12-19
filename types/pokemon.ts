import type { NamedAPIResource } from "./common";

interface Pokemon {
  id: number;
  name: string;
  base_experience: number | null;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItemVersion[];
  location_area_encounters: string;
  moves: PokemonMove;
  past_types: PokemonTypePast;
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokemonStat {
  state: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export type { Pokemon };
