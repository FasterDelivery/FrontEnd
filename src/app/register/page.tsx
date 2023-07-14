"use client";
import axios from "axios";
import React, { FormEvent } from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import useInput from "../hooks/useInput";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const name = useInput();
  const lastName = useInput();
  const password = useInput();
  const confirmPassword = useInput();
  const email = useInput();
  const address = useInput();
  const phone = useInput();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    password.validatePassword();
    confirmPassword.validateConfirmPassword(password.value);
    email.validateEmail();
    phone.validatePhone();
    console.log(router);
    password.passwordErrors[0] &&
      email.emailErrors[0] &&
      confirmPassword.confirmPasswordErrors[0];
    phone.phoneErrors[0];
    axios
      .post(`http://44.201.112.1/api/user/register`, {
        name: name.value,
        lastname: lastName.value,
        password: password.value,
        email: email.value,
        phone: parseInt(phone.value),
        address: address.value,
        isAdmin: false
      })
      .then((res) => {
        console.log(res.data);
        alert(`Registro exitoso`);
        router.push("/login");
      })
      .catch(() => alert("Error de registro"));
  };

  return (
    <div className="w-90 mx-auto flex flex-col justify-center items-center">
      <div className="mt-8">
        <Image src={logo} alt="logo" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto flex flex-col justify-start mt-8 items-center"
      >
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Nombre</h1>
          <input
            type="text"
            id="firstName"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Nombre"
            {...name}
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
            {...lastName}
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
            {...email}
            required
          />
          {email.emailErrors ? (
            <span className="text-red-500 text-sm">{email.emailErrors[0]}</span>
          ) : (
            ""
          )}
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Contraseña</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Contraseña"
            {...password}
            required
          />
          {password.passwordErrors ? (
            <span className="text-red-500 text-sm">
              {password.passwordErrors[0]}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Confirmar Contraseña</h1>
          <input
            type="password"
            id="confirmPassword"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Confirmar Contraseña"
            {...confirmPassword}
            required
          />
          {confirmPassword.confirmPasswordErrors ? (
            <span className="text-red-500 text-sm">
              {confirmPassword.confirmPasswordErrors[0]}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Teléfono</h1>
          <input
            type="number"
            id="phone"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Teléfono"
            {...phone}
            required
          />
          {phone.phoneErrors ? (
            <span className="text-red-500 text-sm">{phone.phoneErrors[0]}</span>
          ) : (
            ""
          )}
        </div>
        <div className="w-90 mx-auto py-2">
          <h1 className="text-md text-yellow-400">Dirección</h1>
          <input
            type="text"
            id="address"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Dirección"
            {...address}
            required
          />
        </div>
        <button
          type="submit"
          className="my-6 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5"
        >
          REGISTRARSE
        </button>
      </form>
      <a className="text-[#217BCE] my-2 font-sans font-bold" href="">
        Iniciar Sesión
      </a>
    </div>
  );
}
