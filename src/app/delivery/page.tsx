import React from "react";
import Image from "next/image";
import dropdown from "../Assets/dropdown.png";
import { BackButton, Navbar } from "app/Components";

console.log("Mapa");


const pages = () => {
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
            <iframe
              title="ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.459350600613!2d-57.55511987076555!3d-38.05087484266043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de0a949d16d9%3A0x2bf3db8497eb780f!2sFigueroa%20Alcorta%201499%2C%20B7603BUQ%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1630346064185!5m2!1ses!2sar"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
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
            >
              FINALIZAR
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default pages;
