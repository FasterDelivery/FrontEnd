"use client";
import React from "react";
import Map from "./mapa";
import Image from "next/image";
import dropdown from "../Assets/dropdown.png";
import { BackButton, Navbar } from "app/Components";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks";

const App: React.FC = () => {
  const destination: google.maps.LatLngLiteral = {
    lat: -22.977635749850354,
    lng: -46.98865870252204
  };
  const user = useAppSelector((state) => state.users);
  const token = useAppSelector((state) => state.token);

  const HandleFinalizar = async () => {
    await axios.put(
      `https://3.91.204.112/api/packages/2/edit/package/${user.id}`
    ),
      {
        status: "entregado"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  };

  return (
    <>
      <Navbar />
      <div className="py-6">
        <div className="w-90 mx-auto">
          <button className="">
            <BackButton />
          </button>
        </div>
        <div
          className="w-90 top-0 bg-white shadow-sm rounded-md mx-auto px-6 mb-6"
          style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)" }}
        >
          <section className="flex justify-between">
            <div className="py-6 font-bold font-sans text-base leading-tight">
              Reparto en curso
            </div>
            <button className="">
              <Image src={dropdown} alt="dropdown" />
            </button>
          </section>
          <section className="">
            <Map destination={destination} />
          </section>
          <section className="flex flex-col py-4">
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                Destino:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                Amenabar 2356, CABA
              </p>
            </div>
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                # del paquete:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                712
              </p>
            </div>
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                Recibe:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                Raúl Rodriguez
              </p>
            </div>
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="font-roboto font-medium text-base leading-6 tracking-wider rounded shadow text-white bg-dark-blue-button hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={HandleFinalizar}
            >
              FINALIZAR
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
