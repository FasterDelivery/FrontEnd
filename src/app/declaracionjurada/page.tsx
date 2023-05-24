import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import goBack from "../Assets/goBack.png";

export default function DeclaracionJurada() {
  return (
    <>
      <div className="shadow-lg mx-auto max-w-md h-[640px]">
        <nav
          style={{
            borderBottom: "1px solid gray",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <Image
            src={logo}
            alt="logo"
            style={{ width: "51px", height: "32px" }}
          />
        </nav>
        <div>
          <Image
            src={goBack}
            alt="goBack"
            style={{ marginTop: "15px", marginLeft: "10px" }}
          ></Image>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-around"
            }}
          >
            <h1
              style={{
                fontFamily: "inter",
                fontSize: "25px",
                fontWeight: "400",
                marginBottom: "30px",
                marginTop: "30px"
              }}
            >
              Declaración Jurada
            </h1>
            <div
              style={{
                height: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  width: "340px"
                }}
              >
                {" "}
                ¿Ha consumido bebidas alcohólicas en las últimas 12 horas?
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "340px",
                  margin: "10px"
                }}
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "4px",
                    color: "black",
                    backgroundColor: "#E5E7EB",
                    width: "100px",
                    height: "40px"
                  }}
                >
                  SI
                </button>
                <button
                  type="button"
                  style={{
                    borderRadius: "4px",
                    color: "black",
                    backgroundColor: "#E5E7EB",
                    width: "100px",
                    height: "40px"
                  }}
                >
                  NO
                </button>
              </div>

              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  width: "340px"
                }}
              >
                {" "}
                ¿Usted está haciendo uso de medicamentos psicoactivos?
                tranquilizantes, antigripales, antialergicos o para insomnio{" "}
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "340px",
                  margin: "10px"
                }}
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "4px",
                    color: "black",
                    backgroundColor: "#E5E7EB",
                    width: "100px",
                    height: "40px"
                  }}
                >
                  SI
                </button>
                <button
                  type="button"
                  style={{
                    borderRadius: "4px",
                    color: "black",
                    backgroundColor: "#E5E7EB",
                    width: "100px",
                    height: "40px"
                  }}
                >
                  NO
                </button>
              </div>

              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  width: "340px"
                }}
              >
                ¿Tiene usted algún problema familiar emocional o de cualquier
                tipo que lo distraiga?
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "340px",
                  margin: "10px"
                }}
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "4px",
                    color: "black",
                    backgroundColor: "#E5E7EB",
                    width: "100px",
                    height: "40px"
                  }}
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
        <button
         className="bg-blue-500 text-white rounded-md w-80 h-7 mt-12 ml-3"
        >
          CONTINUAR
        </button>
        </div>
      </div>
    </>
  );
}
