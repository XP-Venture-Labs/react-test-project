interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: NamedAPIResource;
  egg_groups: NamedAPIResource[];
  evolution_chain: APIResource;
  evolves_from_species: NamedAPIResource | null;
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: NamedAPIResource;
  growth_rate: NamedAPIResource;
  habitat: NamedAPIResource | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounterArea[];
  pokedex_numbers: PokemonSpeciesDexEntry[];
  shape: NamedAPIResource | null;
  varieties: Variety[];
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface Name {
  name: string;
  language: NamedAPIResource;
}

interface APIResource {
  url: string;
}

interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

interface Genus {
  genus: string;
  language: NamedAPIResource;
}

interface PalParkEncounterArea {
  area: NamedAPIResource;
  base_score: number;
  rate: number;
}

interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource;
}

interface Variety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}

interface Description {
  description: string;
  language: NamedAPIResource;
}

export type { PokemonSpecies };
