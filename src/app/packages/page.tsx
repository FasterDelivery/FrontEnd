"use client";
import React, { useState } from "react";
import { BackButton, Button, Navbar } from "app/Components";
import Link from "next/link";

interface Ubicacion {
  id: number;
  nombre: string;
}

type debounceFunction = (
  cantidadDePaquetes: number,
  diferencial: string
) => void;

const ubicaciones: Ubicacion[] = [
  { id: 1, nombre: "Amenabar 2356, CABA" },
  { id: 1, nombre: "AV. Carabobo y Rivadavia, CABA" },
  { id: 1, nombre: "Melian 1242, CABA" }
];

const GetPackages = () => {
  const [paquetes, setPaquetes] = useState(1);

  // Función controladora del estado inicial de "paquetes"
  function debounce(func: debounceFunction, delay: number): debounceFunction {
    let timerId: any;

    return function (cantidadDePaquetes: number, diferencial: string) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        return func(cantidadDePaquetes, diferencial);
      }, delay);
    };
  }

  // Función que se ejecuta dependiendo de su texto "diferencial" que proviene de los btns
  function procesadorDePaquetes(estado: number, diferencial: string) {
    if (diferencial === "agregar") setPaquetes(estado + 1);
    if (diferencial === "eliminar" && estado >= 2) setPaquetes(estado - 1);
  }

  // Aplicar debounce a la función procesadorDePaquetes con un retraso de 300ms
  const agregarPaquete = debounce(procesadorDePaquetes, 300);
  const disminuirPaquete = debounce(procesadorDePaquetes, 300);

  return (
    <>
      <div className="mx-auto max-w-md">
        <Navbar />
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",

            width: "100%"
          }}
        >
          <BackButton />
          <div
            className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ width: "100%", marginBottom: "30px" }}>
              <h1 style={{ fontSize: "25px" }}>
                <strong>Obtener paquetes</strong>
              </h1>
              <h5 className="text-red">
                ¿Cuántos paquetes más vas a repartir hoy?
              </h5>
            </div>
            {ubicaciones.map((ubicacion: Ubicacion) => (
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "100%"
                }}
                key={ubicacion.id}
              >
                <h5>{ubicacion.nombre}</h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked
                      style={{
                        transform: "scale(2)",
                        marginRight: "10px",
                        marginLeft: "35px"
                      }}
                    />
                  </label>
                  <button
                    style={{
                      border: "1px solid black",
                      height: "26px",
                      width: "26px",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      margin: "30px"
                    }}
                    onClick={() => {
                      disminuirPaquete(paquetes, "eliminar");
                    }}
                  >
                    -
                  </button>
                  {paquetes}
                  <button
                    style={{
                      border: "1px solid black",
                      height: "26px",
                      width: "26px",
                      backgroundColor: "white",
                      borderRadius: "4px",
                      margin: "30px"
                    }}
                    onClick={() => {
                      agregarPaquete(paquetes, "agregar");
                    }}
                  >
                    +
                  </button>
                </div>
                <hr style={{ width: "100%", marginTop: "20px" }} />
              </div>
            ))}
            <Link href="reparto">
              <Button buttonText="INICIAR JORNADA" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPackages;
