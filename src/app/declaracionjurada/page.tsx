import React from "react";
import { BackButton, Button, Navbar } from "app/Components";

export default function DeclaracionJurada() {
  return (
    <>
      <div className="shadow-lg mx-auto max-w-md h-[640px]">
        <Navbar />
        <BackButton />
        <div className="flex w-full justify-center items-center">
          <div className="flex w-full flex-col items-center justify-around">
            <h1 className="font-inter text-xl font-normal mb-8 mt-8">
              Declaración Jurada
            </h1>
            <div className="h-96 w-full flex flex-col justify-around items-center">
              <h2 className="font-sans font-bold w-96 text-center">
                {" "}
                ¿Ha consumido bebidas alcohólicas en las últimas 12 horas?
              </h2>
              <div className="flex justify-center w-96 m-4 space-x-8">
                <button
                  type="button"
                  className="bg-gray-300 text-black rounded-md w-24 h-10"
                >
                  SI
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black rounded-md w-24 h-10"
                >
                  NO
                </button>
              </div>

              <h2 className="font-sans font-bold w-96 text-center">
                {" "}
                ¿Usted está haciendo uso de medicamentos psicoactivos?
                tranquilizantes, antigripales, antialergicos o para insomnio{" "}
              </h2>
              <div className="flex justify-center w-96 m-4 space-x-8">
                <button
                  type="button"
                  className="bg-gray-300 text-black rounded-md w-24 h-10"
                >
                  SI
                </button>
                <button className="bg-gray-300 text-black rounded-md w-24 h-10">
                  NO
                </button>
              </div>

              <h2 className="font-sans font-bold w-96 text-center">
                ¿Tiene usted algún problema familiar emocional o de cualquier
                tipo que lo distraiga?
              </h2>
              <div className="flex justify-center w-96 m-4 space-x-8">
                <button
                  type="button"
                  className="bg-gray-300 text-black rounded-md w-24 h-10"
                >
                  SI
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black rounded-md w-24 h-10"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button buttonText="CONTINUAR" />
        </div>
      </div>
    </>
  );
}
