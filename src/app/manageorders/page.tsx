"use client";
import React from "react";
import Image from "next/image";
import avatar from "../Assets/Ellipse 10.png";
import dropdown from "../Assets/dropdown.png";
import avatar2 from "../Assets/Ellipse 6.png";
import avatar3 from "../Assets/Ellipse 8.png";
import { Button, Navbar } from "app/Components";
import { useState } from "react";
import Link from "next/link";
import BackButton from "app/Components";

interface Day {
  id: number;
  name: string;
  selected?: boolean;
}

const days: Day[] = [
  { id: 1, name: "Lunes" },
  { id: 2, name: "Martes" },
  { id: 3, name: "Miércoles" },
  { id: 4, name: "Jueves" },
  { id: 5, name: "Viernes" }
];

// interface Item {
//   percentage: number;
// }

const Index = () => {
  const percentage = 45;
  // const angle = percentage * 3.6;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  // const [items] = useState<Item[]>([{ percentage: 60 }, { percentage: 100 }]);
  // const [color, setColor] = useState("blue");
  // useEffect(() => setColor("yellow"), []);

  return (
    <div className="mx-auto max-w-md">
      <Navbar />
      <BackButton />
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
              className={
                day.name === "Jueves"
                  ? "bg-yellow-500 rounded-lg m-2 p-4"
                  : "bg-blue-500 rounded-lg m-2 p-4"
              }
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
            <div className="flex flex-col justify-center p-4 items-center">
              <div className="w-32 h-32 relative">
                <section
                  className="circular-progress"
                  style={{
                    background: `conic-gradient(${
                      percentage === Number(100) ? "#96DB76" : "#FCBC11"
                    } ${percentage * 3.6}deg, #ededed 0deg)`
                  }}
                >
                  <span className="absolute font-bold">{`${percentage}%`}</span>

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
                </section>
              </div>
              <Link href="repartidores">
                <Button buttonText="VER REPARTIDORES" />
              </Link>
            </div>
            <div>
              <h2>Porcentaje 2: 50%</h2>
              <h1>Paquetes</h1>
              <h4>{"{activos / total}"} repartidos</h4>
              <Link href="gestionarpaquetes">
                <Button buttonText="VER PAQUETES" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
