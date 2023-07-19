"use client";
import React, { useState } from "react";
import { BackButton, Navbar } from "app/Components";
import Link from "next/link";
import axios from "axios";

export default function DeclaracionJurada() {
  const [declaraciones, setDeclaraciones] = useState({
    bebidas: true,
    medicamentos: true,
    emocional: true
  });

  const handleYesNoChange = (field: string, value: boolean) => {
    setDeclaraciones((prevDeclaraciones) => ({
      ...prevDeclaraciones,
      [field]: value
    }));
  };

  const handleContinue = () => {
    const day = new Date().toString();
    const { bebidas, medicamentos, emocional } = declaraciones;
    axios.post(`https://3.91.204.112/api/ddjj`, {
      dayDeclaracionJurada: day,
      bebidasAlcoholicas: bebidas ? "yes" : "no",
      medicamentos: medicamentos ? "yes" : "no",
      estadoEmocional: emocional ? "yes" : "no",
      userId: 35
    });
  };

  console.log(declaraciones);

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
                    declaraciones.bebidas
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("bebidas", true)}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaraciones.bebidas
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("bebidas", false)}
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
                    declaraciones.medicamentos
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("medicamentos", true)}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaraciones.medicamentos
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("medicamentos", false)}
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
                    declaraciones.emocional
                      ? "bg-blue-500 text-black rounded-md w-24 h-10"
                      : "bg-gray-300 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("emocional", true)}
                >
                  SI
                </button>
                <button
                  type="button"
                  className={
                    declaraciones.emocional
                      ? "bg-gray-300 text-black rounded-md w-24 h-10"
                      : "bg-blue-500 text-black rounded-md w-24 h-10"
                  }
                  onClick={() => handleYesNoChange("emocional", false)}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {!declaraciones.bebidas &&
          !declaraciones.medicamentos &&
          !declaraciones.emocional ? (
            <Link href="/">
              <button
                type="button"
                className="bg-blue-800 text-white rounded-xl w-32 h-12 mt-4 font-sans font-bold"
                onClick={handleContinue}
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
