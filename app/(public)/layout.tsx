"use client";

import { useRouter } from "next/navigation";
import ButtonComponent from "../components/button";
import { useAuthStore } from "../stores/authStore";
import { useUserCaptureStore } from "../stores/userCapture";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { estado, logout } = useAuthStore();
  const {
    listCapturePokemons
  } = useUserCaptureStore();

  return (
    <div className="h-svh bg-gray-100 flex flex-col">
      <div className="bg-yellow text-black p-6 shadow-lg border-b border-gray-200 h-[60px] flex ">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-12 items-center">
            <p>LOGUEADO</p>
            <div className={`${estado ? "text-[#4dad5b]" : "text-red-500"}`}>
              {estado ? "ON" : "OFF"}
            </div>
          </div>
          <div className="flex flex-row gap-12">
            {estado && listCapturePokemons && listCapturePokemons.length > 0 &&<ButtonComponent
              onClick={() => router.push("/captured")}
              text={"Ver capturados"}
            />}
            <ButtonComponent
              onClick={estado ? logout : () => router.push("/login")}
              text={`${estado ? "LOGOUT" : "LOGIN"}`}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex p-4">{children}</div>
    </div>
  );
}
