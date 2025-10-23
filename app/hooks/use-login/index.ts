'use client'
import { useAuthStore } from "@/app/stores/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function useLogin(){
  const router = useRouter();
  const { usuario, clave, estado, login } = useAuthStore();
  const [inputUsuario, setInputUsuario] = useState(usuario);
  const [inputClave, setInputClave] = useState(clave);

  const handleLogin = () => {
    if (inputUsuario && inputClave) {
      login(inputUsuario, inputClave);
      router.push("/home");
    }
  };

  return {
    inputUsuario, 
    inputClave, 
    setInputClave,
    setInputUsuario,
    handleLogin
  }
}