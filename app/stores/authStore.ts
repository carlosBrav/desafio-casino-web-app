import { create } from "zustand";

interface AuthState {
  usuario: string;
  password: string;
  estado: boolean; // true = logueado, false = no logueado
  setUsuario: (usuario: string) => void;
  setPassword: (password: string) => void;
  login: (usuario: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  usuario: "",
  clave: "",
  estado: false,

  setUsuario: (usuario) => set({ usuario }),
  setClave: (clave) => set({ clave }),

  login: (usuario, clave) => {
    if (usuario && clave) {
      set({ usuario, clave, estado: true });
    }
  },

  logout: () => set({ usuario: "", clave: "", estado: false }),
}));