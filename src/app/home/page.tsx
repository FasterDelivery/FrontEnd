import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import dropdown from "../Assets/dropdown.png";
import trash from "../Assets/trash.png";
export default function Home() {
  return (
    <div className="mx-auto max-w-md">
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
      <div className="max-w-md flex flex-col justify-start mx-auto items-center">
        <button
          type="button"
          className=" my-4 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen"
        >
          OBTENER PAQUETES
        </button>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Repartos Pendientes</p>
            <Image src={dropdown} alt="dropdown" width={13} height={9} />
          </div>
          <p className="ml-4 font-sans text-sm">
            {" "}
            No tenés repartos pendientes
          </p>
        </div>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Historial de Repartos</p>
            <Image src={dropdown} alt="dropdown" width={13} height={9} />
          </div>
          <p className="ml-4 font-sans text-sm"> Ya repartiste 58 paquetes</p>
          <div className="divide-y">
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <p className="font-sans text-sm mr-8">
                      {" "}
                      Amenabar 2356, CABA
                    </p>
                    <Image src={trash} alt="trash" width={16} height={16} />
                  </div>
                  <p className="font-sans text-sm font-bold self-end">
                    Entregado
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <p className="font-sans text-sm mr-8">
                      {" "}
                      Av. Carabobo y Rivadavia, CABA
                    </p>
                    <Image src={trash} alt="trash" width={16} height={16} />
                  </div>
                  <p className="font-sans text-sm font-bold self-end">
                    Entregado
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <p className="font-sans text-sm mr-8">
                      Mendoza 1810, CABA{" "}
                    </p>
                    <Image src={trash} alt="trash" width={16} height={16} />
                  </div>
                  <p className="font-sans text-sm font-bold self-end text-yellow-300">
                    En curso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
