import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { Button } from "app/Components";
export default function Login() {
  return (
    <div className="flex flex-col justify-center m-auto items-center">
      <div className="mt-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="w-90 mx-auto flex flex-col justify-start mt-8 items-center">
        <div className="py-2 w-90 mx-auto">
          <h1 className="text-md text-yellow-400">Username</h1>
          <input
            type="text"
            id="username"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="user@email.com"
            required
          />
        </div>
        <div className="py-2 w-90 mx-auto">
          <h1 className="text-md text-yellow-400">Contraseña</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Contraseña"
            required
          />
        </div>
        <Button buttonText="INGRESAR" />
        <a className="text-[#217BCE] my-2 font-sans" href="">
          Recuperar Contraseña
        </a>
        <a className="text-[#217BCE] my-2 font-sans font-bold" href="/register">
          Registrarse
        </a>
      </div>
    </div>
  );
}
