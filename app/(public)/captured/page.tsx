'use client'

import ButtonComponent from "@/app/components/button";
import CardInfo from "@/app/components/card-info";
import { useUserCaptureStore } from "@/app/stores/userCapture";
import { useRouter } from "next/navigation";
import React from "react";

export default function Captured() {
  const router = useRouter();
  const { listCapturePokemons } = useUserCaptureStore();
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#4dad5b]">
        Listado de Pokemones Capturados
      </h1>
      {listCapturePokemons && listCapturePokemons.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
          {listCapturePokemons.map((pokemon: any, index: number) => (
            <CardInfo
              onClick={() => {}}
              name={pokemon.name}
              url={pokemon.photo}
              key={`pokemon-${index}`}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row items-center justify-between mt-6">
        <ButtonComponent text="Regresar" onClick={() => router.push("/home")} />
      </div>
    </div>
  );
}
