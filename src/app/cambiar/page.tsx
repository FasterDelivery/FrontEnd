"use client";
import axios from "axios";
import React, { useState, useEffect, FormEvent } from "react";
import { Navbar, Button } from "app/Components";
import {User} from "app/interfaces/users"
import Image from "next/image";
import logo from "../Assets/logo.png";
import useInput from "../hooks/useInput";
import { useRouter } from "next/navigation";


export default function Cambiar() {

  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const password = useInput();
  const confirmPassword = useInput();
  const [user, setUser] = useState<User>({id:0, name:"", lastname:"", email: "", address:"", phone:"", isAdmin:false})

  const handleSubmit = async(event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    password.validatePassword();
    confirmPassword.validateConfirmPassword(confirmPassword.value);
    if (password.passwordErrors.length === 0 && confirmPassword.confirmPasswordErrors.length === 0) {
      
      console.log(token)
      const response = await axios.put(`http://44.201.112.1/api/user/edit/${user.id}`,{...user,password:password.value},{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      
        localStorage.setItem("token",response.data.token)
        user.isAdmin
          ? router.push("manageorders")
          : router.push(`/home`);
    
  }}

  useEffect(()=>{
    axios
    .get(`http://44.201.112.1/api/user/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    .then((res)=>{
        setUser(res.data)
    })
  },[])


  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center m-auto items-center">
        <div className="mt-8">
          <Image src={logo} alt="logo" />
        </div>
        <br /> <br />
        <form
          onSubmit={handleSubmit}
          className="w-90 mx-auto flex flex-col justify-start mt-8 items-center"
        >
          <div className="py-2 w-90 mx-auto">
            <h1 className="text-md text-yellow-400">Nueva Contraseña</h1>
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
          <div className="py-2 w-90 mx-auto">
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

          <Button buttonText="CAMBIAR CONTRASEÑA" />
        </form>
      </div>
    </>
  );
};

