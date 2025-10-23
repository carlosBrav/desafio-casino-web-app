import { create } from "zustand";

interface PokemonDetailState {
  id: number;
  nombre: string;
  tipo_habilidad: string;
  experiencia: number;
  photo: string;
  setId: (value: number) => void;
  setNombre: (value: string) => void;
  setTipoHabilidad: (value: string) => void;
  setExperiencia: (value: number) => void;
  setPhoto: (value: string) => void;
}

export const usePokemonDetailStore = create<PokemonDetailState>((set) => ({
  id: 0,
  nombre: "",
  tipo_habilidad: "",
  experiencia: 0,
  photo: "",

  setId: (id) => set({ id }),
  setNombre: (nombre) => set({ nombre }),
  setTipoHabilidad: (tipo_habilidad) => set({ tipo_habilidad }),
  setExperiencia: (experiencia) => set({ experiencia }),
  setPhoto: (photo) => set({ photo }),
}));
