"use client";
import React, { FormEvent } from "react";
import { BackButton, Navbar } from "app/Components";
import useInput from "../hooks/useInput";
import useControllCountPackages from "../hooks/useControllCountPackages";
import axios from "axios";
import Swal from "sweetalert2";

const Page = () => {
  const clientname = useInput();
  const controllCountPackages = useControllCountPackages();
  const weight = useInput();
  const day: any = useInput();
  const street = useInput();
  const number = useInput();
  const city = useInput();
  const province = useInput();
  const postalCode = useInput();
  const deliDay = new Date(day.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const body = {
      clientname: clientname.value,
      image: "http://dummyimage.com/218x100.png/5fa2dd/ffffff",
      quantity: controllCountPackages.state,
      weight: weight.value,
      deliveryday: deliDay,
      street: street.value,
      number: number.value,
      city: city.value,
      province: province.value,
      postalCode: postalCode.value
    };
    axios
      .post("https://3.91.204.112/api/packages/new", body, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmIkMDkkZy4xS3ZyTWpiam11NkNKd2N1Rk5FZW4uSmh1cHpGV25lZUFRejAuWVBpcHNDTDdvVTIuaTIiLCJpc0FkbWluIjp0cnVlfSwiaWF0IjoxNjkwNDg1MjcwLCJleHAiOjE2OTA0OTI0NzB9.EW_BODtDF85-cpE-m7J9uP3dZu8Lzk4ZuYCPR2ranhw"
        }
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "OK",
          text: `Paquete creado correctamente`,
          icon: "info",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#217BCE",
          customClass: {
            popup: "sm:w-1/2"
          }
        });
      })
      .catch((error) => {
        console.log(error);
        return Swal.fire({
          title: "Errores al crear paquete.",
          text: `Por favor, intente nuevamente.`,
          icon: "warning",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#217BCE",
          customClass: {
            popup: "sm:w-1/2"
          }
        });
      });
  };

  return (
    <div className="mx-auto max-w-md">
      <Navbar />
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
          <div className="w-90 mx-auto flex" style={{ marginBottom: "15px" }}>
            <div className="w-50 pr-2">
              <h1 className="text-md text-yellow-400">Ciudad</h1>
              <input
                type="text"
                id="city"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...city}
                required
              />
            </div>
            <div className="w-50 pl-2">
              <h1 className="text-md text-yellow-400">Provincia</h1>
              <input
                type="text"
                id="province"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...province}
                required
              />
            </div>
          </div>
          <div className="w-90 mx-auto flex" style={{ marginBottom: "15px" }}>
            <div className="w-50 pr-1">
              <h1 className="text-md text-yellow-400">Direccion</h1>
              <input
                type="text"
                id="street"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...street}
                required
              />
            </div>
            <div className="w-2/4 pl-2">
              <h1 className="text-md text-yellow-400">Nro</h1>
              <input
                type="number"
                id="number"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...number}
                required
              />
            </div>
            <div className="w-1/4 pl-2">
              <h1 className="text-md text-yellow-400">CP</h1>
              <input
                type="text"
                id="postalCode"
                className="border-b-2 border-blue-500 focus:outline-none w-full"
                {...postalCode}
                required
              />
            </div>
          </div>

          <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
            <h1 className="text-md text-yellow-400">Nombre de quien recibe</h1>
            <input
              type="text"
              id="recipient-name"
              className="border-b-2 border-blue-500 focus:outline-none w-full"
              {...clientname}
              required
            />
          </div>

          <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
            <h1 className="text-md text-yellow-400">Peso (Kg)</h1>
            <input
              type="number"
              id="weight"
              className="border-b-2 border-blue-500 focus:outline-none w-full"
              {...weight}
              required
            />
          </div>
          <div className="w-90 mx-auto" style={{ marginBottom: "15px" }}>
            <h1 className="text-md text-yellow-400">
              Fecha en la que debe ser repartido
            </h1>
            <input
              type="date"
              id="date"
              className="border-b-2 border-blue-500 focus:outline-none w-full"
              {...day}
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
  );
};

export default Page;

