"use client";
import React, { useState } from "react";
import { BackButton, Navbar } from "app/Components";
import Link from "next/link";

export default function DeclaracionJurada() {
  const [declaracionBebidas, setDeclaracionBebidas] = useState<boolean>(true);
  const [declaracionMedicamentos, setDeclaracionMedicamentos] =
    useState<boolean>(true);
  const [declaracionEmocional, setDeclaracionEmocional] =
    useState<boolean>(true);

  const handleYesBebidas = () => {
    setDeclaracionBebidas(true);
  };
  const handleNoBebidas = () => {
    setDeclaracionBebidas(false);
  };

  const handleYesMedicamentos = () => {
    setDeclaracionMedicamentos(true);
  };

  const handleNoMedicamentos = () => {
    setDeclaracionMedicamentos(false);
  };

  const handleYesEmocional = () => {
    setDeclaracionEmocional(true);
  };

  const handleNoEmocional = () => {
    setDeclaracionEmocional(false);
  };

  return (
    <>
      <div className="w-90 shadow-lg mx-auto h-[640px]">
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
                  id="buttonBebidas"
                  type="button"
                  className={
                    declaracionBebidas
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleYesBebidas}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaracionBebidas
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleNoBebidas}
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
                  className={
                    declaracionMedicamentos
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleYesMedicamentos}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaracionMedicamentos
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleNoMedicamentos}
                >
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
                  className={
                    declaracionEmocional
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleYesEmocional}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaracionEmocional
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={handleNoEmocional}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {!declaracionBebidas &&
          !declaracionEmocional &&
          !declaracionMedicamentos ? (
            <Link href="home">
              <button
                type="button"
                className="bg-blue-800 text-white rounded-xl w-32 h-12 mt-4 font-sans font-bold"
              >
                Continuar
              </button>
            </Link>
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
}
