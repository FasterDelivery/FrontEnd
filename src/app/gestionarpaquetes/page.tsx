import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import trash from "../Assets/trash.png";
import polygon from "../Assets/polygon.png";
import goBack from "../Assets/goBack.png";

export default function ManagePackages() {
  return (
    <div className="shadow-lg mx-auto w-full h-[640px]">
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
      <Image
        src={goBack}
        alt="goBack"
        style={{ marginTop: "15px", marginLeft: "10px" }}
      ></Image>
      <div className="w-90 flex flex-col justify-start mx-auto items-center">
        <div className="w-full shadow-lg rounded-md w-321 my-4 flex flex-col justify-center p-8">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans"> Paquetes </p>
            <div>
              <Image src={polygon} alt="dropdown" />
            </div>
          </div>

          <p className="ml-4 font-sans text-sm">
            {" "}
            Hay 523 paquetes con el criterio de filtrado <br />
            seleccionado
          </p>

          <div className="divide-y">
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-sm mr-auto whitespace-normal break-words">
                      {" "}
                      Amenabar 2356, CABA
                    </p>
                    <div className="ml-2">
                      <Image src={trash} alt="trash" width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div>
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between max-w-[100%]">
                      <div className="flex justify-end">
                        <p className="font-sans text-sm mr-auto break-words">
                          {" "}
                          Av. Carabobo y Rivadavia, CABA
                        </p>
                      </div>
                      <div className="ml-2">
                        <Image src={trash} alt="trash" width={16} height={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div>
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between">
                      <p className="font-sans text-sm mr-auto">
                        Mendoza 1810, CABA{" "}
                      </p>
                      <div className="ml-2">
                        <Image src={trash} alt="trash" width={16} height={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
