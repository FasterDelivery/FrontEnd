"use client";
import React, { useState } from "react";
import { BackButton, Button, Navbar } from "app/Components";
import Link from "next/link";

interface IUbicacion {
  id: number;
  nombre: string;
}

const GetPackages = () => {
  const ubicaciones: IUbicacion[] = [
    { id: 1, nombre: "Amenabar 2356, CABA" },
    { id: 2, nombre: "AV. Carabobo y Rivadavia, CABA" },
    { id: 3, nombre: "Melian 1242, CABA" }
  ];

  const [ubicacionStates, setUbicacionStates] = useState(
    ubicaciones.map((ubicacion) => ({
      id: ubicacion.id,
      checkboxChecked: true,
      number: 2
    }))
  );

  const handleCheckboxChange = (id: number) => {
    setUbicacionStates((prevStates) =>
      prevStates.map((state) =>
        state.id === id
          ? { ...state, checkboxChecked: !state.checkboxChecked }
          : state
      )
    );
  };

  const handleNumberChange = (id: number, increment: number) => {
    setUbicacionStates((prevStates) =>
      prevStates.map((state) =>
        state.id === id ? { ...state, number: state.number + increment } : state
      )
    );
  };

  return (
    <>
      <div className="mx-auto w-90">
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
            {ubicaciones.map((ubicacion: IUbicacion) => {
              const ubicacionState = ubicacionStates.find(
                (state) => state.id === ubicacion.id
              );
              if (!ubicacionState) return null;

              return (
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
                        checked={ubicacionState.checkboxChecked}
                        onChange={() => handleCheckboxChange(ubicacion.id)}
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
                      onClick={() => handleNumberChange(ubicacion.id, -1)}
                    >
                      -
                    </button>
                    {ubicacionState.number}
                    <button
                      style={{
                        border: "1px solid black",
                        height: "26px",
                        width: "26px",
                        backgroundColor: "white",
                        borderRadius: "4px",
                        margin: "30px"
                      }}
                      onClick={() => handleNumberChange(ubicacion.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <hr style={{ width: "100%", marginTop: "20px" }} />
                </div>
              );
            })}
            <Link href="delivery">
              <Button buttonText="INICIAR JORNADA" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPackages;
