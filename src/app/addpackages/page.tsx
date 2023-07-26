"use client";
import React, { FormEvent } from "react";
import { BackButton, Navbar } from "app/Components";
import useInput from "../hooks/useInput";
import useControllCountPackages from "../hooks/useControllCountPackages";

const Page = () => {
  const address = useInput(),
    name = useInput(),
    kg = useInput(),
    date = useInput(),
    controllCountPackages = useControllCountPackages();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(address.value);
    console.log(name.value);
    console.log(kg.value);
    console.log(date.value);
    console.log(controllCountPackages.state);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-md">
        <div className="shadow-lg rounded-md w-90 mx-auto my-4 flex flex-col justify-center p-4">
          <div
            className="focus:outline-none w-90 mx-auto"
            style={{ marginBottom: "15px" }}
          >
            <BackButton />
            <h1 style={{ fontSize: "20px", marginBottom: "15px" }}>
              Agregar Paquetes
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
              <h1 className="text-md text-yellow-400">Direccion</h1>
              <input
                type="text"
                id="address"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...address}
                required
              />
            </div>

            <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
              <h1 className="text-md text-yellow-400">
                Nombre de quien recibe
              </h1>
              <input
                type="text"
                id="recipient-name"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...name}
                required
              />
            </div>

            <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
              <h1 className="text-md text-yellow-400">Peso (Kg)</h1>
              <input
                type="text"
                id="weight"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...kg}
                required
              />
            </div>
            <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
              <h1 className="text-md text-yellow-400">
                Fecha en la que debe ser repartido
              </h1>
              <input
                type="text"
                id="date"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...date}
                required
              />
            </div>
            <div className="w-90 mx-auto">
              <h1 className="text-md text-yellow-400">Cantidad</h1>
              <div className="focus:outline-none">
                <button
                  type="button"
                  name="less"
                  style={{
                    border: "1px solid black",
                    height: "26px",
                    width: "26px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    marginRight: "30px"
                  }}
                  onClick={() => {
                    controllCountPackages.onClick("less");
                  }}
                >
                  -
                </button>
                {controllCountPackages.state}
                <button
                  type="button"
                  style={{
                    border: "1px solid black",
                    height: "26px",
                    width: "26px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    margin: "30px"
                  }}
                  onClick={() => {
                    controllCountPackages.onClick("more");
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* <Button buttonText="AGREGAR" /> */}
            <button
              type="submit"
              className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              AGREGAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
