'use client'
import ButtonComponent from "@/app/components/button";
import useLogin from "@/app/hooks/use-login";
import React from "react";

export default function Login() {
  const {
    inputClave,
    inputUsuario,
    handleLogin,
    setInputClave,
    setInputUsuario
  } = useLogin()
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-white sm:w-[80%] md:w-[60%] lg:w-[30%]  p-8 rounded shadow-lg">
        <div className="bg-[#4dad5b] text-white text-center py-4">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <div className="bg-white p-6">
          <div className="flex flex-col space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                value={inputUsuario}
                onChange={(event) => setInputUsuario(event.target.value)}
                type="text"
                id="usuario"
                placeholder="Ingresa tu usuario"
                className="w-full border border-gray-300 text-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4dad5b] placeholder-gray-400"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="clave"
              >
                Clave
              </label>
              <input
                value={inputClave}
                onChange={(event) => setInputClave(event.target.value)}
                type="password"
                id="clave"
                placeholder="Ingresa tu clave"
                className="w-full border border-gray-300 text-gray-400 rounded-lg px-3 placeholder-gray-400 py-2 focus:outline-none focus:ring-2 focus:ring-[#4dad5b]"
              />
            </div>

            <ButtonComponent text="Ingresar" onClick={handleLogin}/>
          </div>
        </div>
      </div>
    </div>
  );
}
