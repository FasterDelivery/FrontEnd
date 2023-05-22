import React  from "react";
import Image from "next/image";
import logo from "../Assets/logo.png"
export default function Login(){
    return(
        <div className="max-w-md flex flex-col justify-center m-auto items-center">
            <div className="mt-8">
                <Image src={logo} alt="logo"/>
            </div>
            <div className="flex flex-col justify-start mt-8 items-center max-w-md">
                <div>
                <h1 className="text-md text-yellow-400">Username</h1>
                <input type="text" id="username" className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen" placeholder="user@email.com" required />
                </div>
                <div>
                <h1 className="text-md text-yellow-400">Contraseña</h1>
                <input type="password" id="password" className="border-b-2 border-blue-500 focus:outline-none max-w-md w-screen" placeholder="Contraseña" required />
                </div>
                <button type="button" className=" my-2 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen">INGRESAR</button>
                <a className="text-[#217BCE] my-2 font-sans" href="">Recuperar Contraseña</a>
                <a className="text-[#217BCE] my-2 font-sans font-bold" href="">Registrarse</a>
            </div>
            
            
        </div>
        
    )
}
