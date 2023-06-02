"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  console.log(passwordError);

  const handleSignUp = () => {
    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("La contraseña debe tener al menos una letra mayúscula");
    } else if (!/[\W_]/.test(password)) {
      setPasswordError(
        "La contraseña debe incluir al menos un caracter especial"
      );
    } else if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      // Perform sign-up logic here
      // You can add your own implementation or API call
      setPasswordError("");
      console.log(passwordError);

      // Reset form or redirect to success page
    }
  };
  return (
    <div className="w-90 mx-auto flex flex-col justify-center items-center">
      <div className="mt-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="w-full mx-auto flex flex-col justify-start mt-8 items-center">
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Nombre</h1>
          <input
            type="text"
            id="firstName"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Apellido</h1>
          <input
            type="text"
            id="lastName"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Apellido"
            required
          />
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Email</h1>
          <input
            type="email"
            id="email"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Contraseña</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Confirmar Contraseña</h1>
          <input
            type="password"
            id="confirmPassword"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button
          type="button"
          className="my-6 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5"
          onClick={handleSignUp}
        >
          REGISTRARSE
        </button>
        <a className="text-[#217BCE] my-2 font-sans font-bold" href="">
          Iniciar Sesión
        </a>
      </div>
    </div>
  );
}
