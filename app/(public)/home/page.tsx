"use client";

import ButtonComponent from "@/app/components/button";
import CardInfo from "@/app/components/card-info";
import useHome from "@/app/hooks/use-home/use-home";

export default function Home() {
  const {
    getNextPokemons,
    goToDetail,
    pokemonListFilter,
    pokemonList,
  } = useHome();
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#4dad5b]">
        Listado de Pokemones
      </h1>
      {pokemonListFilter && pokemonListFilter.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
          {pokemonListFilter.map((pokemon, index) => (
            <CardInfo
              onClick={() => goToDetail(index)}
              name={pokemon.name}
              url={pokemon.urlPhoto}
              key={`pokemon-${index}`}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row items-center justify-center h-10 w-full p-10">
        <div className="flex flex-row gap-12 items-center">
          {pokemonList.length > 20 && (
            <ButtonComponent text="Anterior" onClick={() => {}} />
          )}
          <ButtonComponent text="Siguiente" onClick={getNextPokemons} />
        </div>
      </div>
    </div>
  );
}
