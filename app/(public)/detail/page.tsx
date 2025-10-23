"use client";
import ButtonComponent from "@/app/components/button";
import useDetail from "@/app/hooks/use-detail/use-detail";

export default function Detail() {
  const {
    experiencia,
    nombre,
    photo,
    tipo_habilidad,
    isCaptured,
    isLogged,
    capturePokemon,
    backToHome,
  } = useDetail();
  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#4dad5b]">
        Detalle del pokemon
      </h1>
      <div className="flex flex-row gap-6 mb-6">
        <img src={photo} alt={"pokemon"} className="w-40 h-40 mb-2" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            <p className="text-1xl font-bold text-gray-800">Nombre:</p>
            <p className="text-gray-700">{nombre}</p>
          </div>

          <div className="flex flex-row gap-6">
            <p className="text-1xl font-bold text-gray-800">Experiencia:</p>
            <p className="text-gray-700">{experiencia}</p>
          </div>

          <div className="flex flex-row gap-6">
            <p className="text-1xl font-bold text-gray-800">Habilidad:</p>
            <p className="text-gray-700">{tipo_habilidad}</p>
          </div>

          {isLogged && isCaptured && (
            <div className="flex flex-row gap-6">
              <p className="text-1xl font-bold text-gray-800">Capturado!!!</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center gap-12">
        {isLogged && !isCaptured && (
          <ButtonComponent text="Capturar" onClick={capturePokemon} />
        )}
        <ButtonComponent text="Regresar" onClick={backToHome} />
      </div>
    </div>
  );
}
