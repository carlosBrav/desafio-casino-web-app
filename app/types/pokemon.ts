export interface PokemonInfo {
  id: number;
  name: string;
  url: string;
  urlPhoto?: string;
  habilitie?: string;
  experiencie?: number;
}

export interface PokemonDetailInfo {
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
}
