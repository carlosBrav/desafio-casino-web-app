"use client";

import api from "@/app/libs/axios-client";
import { usePokemonDetailStore } from "@/app/stores/pokemonStore";
import { PokemonInfo } from "@/app/types/pokemon";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useHome() {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
  const [pokemonListFilter, setPokemonListFilter] = useState<PokemonInfo[]>([]);
  const { setId,
  setNombre,
  setTipoHabilidad,
  setExperiencia,
  setPhoto
} = usePokemonDetailStore();

  const filterPokemonList = useCallback(() => {
    const start = (count - 1) * 20;
    const end = start + 20;
    setPokemonListFilter(pokemonList.slice(start, end));
  }, [pokemonList, count]);

  const getListPokemons = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await api.get(`/pokemon?offset=${quantity}&limit=20`);
      const detailedRequests = res.data.results.map(async (p: any) => {
        const res = await api.get(p.url);
        const poke = res.data;
        return {
          id: poke.id,
          name: poke.name,
          url: p.url,
          habilitie: poke.abilities &&  poke.abilities.length > 0 ? poke.abilities.filter((val: any) => !val.is_hidden).map((value: any) => value.ability.name).join(",") : "",
          experiencie: poke.base_experience,
          urlPhoto: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`,
        };
      });
      const results = await Promise.all(detailedRequests);
      setPokemonList((oldValue) => [
        ...oldValue,
        ...(results as PokemonInfo[]),
      ]);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error al obtener pokemones:", error);
    }
  }, [quantity]);

  const goToDetail = (index: number) => {
    setId(pokemonListFilter[index].id)
    setNombre(pokemonListFilter[index].name)
    setTipoHabilidad(pokemonListFilter[index].habilitie)
    setExperiencia(pokemonListFilter[index].experiencie)
    setPhoto(pokemonListFilter[index].urlPhoto)
    router.push("/detail")
  }

  const getNextPokemons = () => {
    setQuantity((oldValue) => oldValue + 20);
    setCount((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    getListPokemons();
  }, [quantity]);

  useEffect(() => {
    if (pokemonList) {
      filterPokemonList();
    }
  }, [pokemonList.length]);

  useEffect(() => {
    setId(0);
    setNombre("");
    setTipoHabilidad("");
    setExperiencia(0);
    setPhoto("");
  }, [])

  return {
    isLoading,
    pokemonList,
    pokemonListFilter,
    getNextPokemons,
    goToDetail,
  };
}
