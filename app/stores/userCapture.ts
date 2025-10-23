import { create } from "zustand";

interface CapturePokemon {
  id: number
  name: string
  photo: string
}

interface userCaptureState {
  listCapturePokemons: CapturePokemon[]
  setListCapturePokemons: (values: CapturePokemon[]) => void
}

export const useUserCaptureStore = create<userCaptureState>((set) => ({
  listCapturePokemons: [],

  setListCapturePokemons: (listCapturePokemons) => set({ listCapturePokemons }),
}));
