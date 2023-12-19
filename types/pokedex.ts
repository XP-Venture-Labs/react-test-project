interface Pokedex {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokedexResult[];
}

interface PokedexResult {
  name: string;
  url: string;
}

export type { Pokedex, PokedexResult };
