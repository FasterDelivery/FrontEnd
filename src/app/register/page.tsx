"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import useInput from "app/hooks/useInput";

export default function SignUp() {
  const password = useInput();
  const confirmPassword = useInput();
  const email = useInput();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(password.validatePassword());
    console.log(email.validateEmail());
    console.log(confirmPassword.value === password.value);
  };

  return (
    <div className="max-w-md flex flex-col justify-center m-auto items-center">
      <div className="mt-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-start mt-8 items-center max-w-md">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-md text-yellow-400">Nombre</h1>
            <input
              type="text"
              className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen"
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <h1 className="text-md text-yellow-400">Apellido</h1>
            <input
              type="text"
              className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen"
              placeholder="Apellido"
              required
            />
          </div>
          <div>
            <h1 className="text-md text-yellow-400">Email</h1>
            <input
              type="email"
              className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen"
              placeholder="email@example.com"
              required
              {...email}
            />
          </div>
          <div>
            <h1 className="text-md text-yellow-400">Contraseña</h1>
            <input
              {...password}
              type="password"
              className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <h1 className="text-md text-yellow-400">Confirmar Contraseña</h1>
            <input
              type="password"
              id="confirmPassword"
              className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen"
              placeholder="Confirmar Contraseña"
              {...confirmPassword}
              required
            />
          </div>
          <button
            type="submit"
            className="my-2 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen"
          >
            REGISTRARSE
          </button>
        </form>
        <a className="text-[#217BCE] my-2 font-sans font-bold" href="">
          Iniciar Sesión
        </a>
      </div>
    </div>
  );
}
