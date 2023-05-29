"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import avatar from "../Assets/Ellipse 10.png";
import dropdown from "../Assets/dropdown.png";
import avatar2 from "../Assets/Ellipse 6.png";
import avatar3 from "../Assets/Ellipse 8.png";
import { useState } from "react";
interface Day {
  id: number;
  name: string;
}

const days: Day[] = [
  { id: 1, name: "Lunes" },
  { id: 2, name: "Martes" },
  { id: 3, name: "Miércoles" },
  { id: 4, name: "Jueves" },
  { id: 5, name: "Viernes" }
];

const Index = () => {
  const percentage = 45;
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // const [color, setColor] = useState("blue");
  // useEffect(() => setColor("yellow"), []);

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

      <div className="shadow-lg rounded-md w-full my-4 flex flex-row items-centerjustify-between  p-4">
        <Image src={avatar} alt="logo" className="w-20 h-20" />
        <div>
          <div className="flex justify-between mx-4">
            <p className="ml-4 font-sans text-sm">Hola {"{Admin.name}"}!</p>
            <br />
          </div>
          <p className="font-bold text-lg font-sans ml-4"> Gestionar pedidos</p>
        </div>
      </div>
      <div className=" rounded-md w-full my-4 flex flex-col justify-center p-4">
        <ul className="flex overflow-x-auto overflow-hidden whitespace-nowrap">
          {days.map((day) => (
            <li
              key={day.id}
              className={`bg-${
                day.name === "Jueves" ? "yellow" : "blue"
              }-500 rounded-lg m-2 p-4`}
            >
              {day.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        id="detalles"
        className="rounded-md w-full my-4 flex flex-col justify-center p-4"
      >
        <h1 className="cursor-pointer" onClick={handleToggle}>
          {"dia"} - Detalles{" "}
          <Image src={dropdown} alt="dropdown" width={13} height={9} />
        </h1>
        {isExpanded && (
          <div className="rounded-md w-full my-4 flex flex-col justify-center p-4 items-center">
            <div>
              <div className="w-32 h-32 relative">
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200"></div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500"
                  style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, ${
                      100 - percentage
                    }% 100%, ${
                      100 - percentage
                    }% ${percentage}%, 0 ${percentage}%)`
                  }}
                ></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl font-bold">
                  {percentage}%
                </p>
                <div className="flex flex-col justify-between h-full ml-4">
                  <h1 className="flex justify-between items-center">
                    Repartidores
                  </h1>
                  <h4>{"{activos / total}"} activos</h4>
                  <div className="flex">
                    <Image
                      src={avatar2}
                      alt="logo"
                      style={{ width: "51px", height: "32px" }}
                    />
                    <Image
                      src={avatar3}
                      alt="logo"
                      style={{ width: "51px", height: "32px" }}
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className=" my-4 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen"
              >
                VER REPARTIDORES
              </button>
            </div>
            <div>
              <h2>Porcentaje 2: 50%</h2>
              <h1>Paquetes</h1>
              <h4>{"{activos / total}"} repartidos</h4>
              <button
                type="button"
                className=" my-4 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen"
              >
                VER PAQUETES
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
