import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { BackButton, Button, Navbar } from "app/Components";

const page = () => {
  return (
    <div className="mx-auto max-w-md">
      <Navbar/>
      <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
        <div
          className="focus:outline-none w-90 mx-auto"
          style={{ marginBottom: "15px" }}
        >
          <BackButton/>
          <h1 style={{ fontSize: "20px", marginBottom: "15px" }}>
            Agregar Paquetes
          </h1>
        </div>
        <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
          <h1 className="text-md text-yellow-400">Direccion</h1>
          <input
            type="text"
            id="address"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            required
          />
        </div>

        <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
          <h1 className="text-md text-yellow-400">Nombre de quien recibe</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            required
          />
        </div>
        <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
          <h1 className="text-md text-yellow-400">Peso (Kg)</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            required
          />
        </div>
        <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
          <h1 className="text-md text-yellow-400">
            Fecha en la que debe ser repartido
          </h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            required
          />
        </div>
        <div className="w-90 mx-auto">
          <h1 className="text-md text-yellow-400">Cantidad</h1>
          <div className="focus:outline-none">
            <button
              style={{
                border: "1px solid black",
                height: "26px",
                width: "26px",
                backgroundColor: "white",
                borderRadius: "4px",
                marginRight: "30px"
              }}
            >
              -
            </button>
            2
            <button
              style={{
                border: "1px solid black",
                height: "26px",
                width: "26px",
                backgroundColor: "white",
                borderRadius: "4px",
                margin: "30px"
              }}
            >
              +
            </button>
          </div>
        </div>
        <Button buttonText="AGREGAR"/>
      </div>
    </div>
  );
};

export default page;
