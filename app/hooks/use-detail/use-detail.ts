"use client";
import { useAuthStore } from "@/app/stores/authStore";
import { usePokemonDetailStore } from "@/app/stores/pokemonStore";
import { useUserCaptureStore } from "@/app/stores/userCapture";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function useDetail() {
  const router = useRouter();
  const {
    nombre,
    tipo_habilidad,
    experiencia,
    photo,
    id,
  } = usePokemonDetailStore();

  const { estado } = useAuthStore();

  const {
    listCapturePokemons,
    setListCapturePokemons
  } = useUserCaptureStore()

  const backToHome = () => {
    router.push("/home");
  };

  const isCaptured = useMemo(() => {
    return listCapturePokemons.filter((val: any) => val.id === id).length > 0
  }, [listCapturePokemons.length, id])

  const capturePokemon = () => {
    setListCapturePokemons([...listCapturePokemons, {
      id,
      name: nombre,
      photo
    }])
  }

  return {
    nombre,
    tipo_habilidad,
    experiencia,
    photo,
    isCaptured,
    id,
    isLogged: estado,
    capturePokemon,
    backToHome,
  };
}
