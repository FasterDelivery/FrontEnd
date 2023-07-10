"use client";
import React from "react";
import Image from "next/image";
import avatar from "../Assets/Ellipse 10.png";
import dropdown from "../Assets/dropdown.png";
import avatar2 from "../Assets/Ellipse 6.png";
// import avatar3 from "../Assets/Ellipse 8.png";
import { Navbar } from "app/Components";
import { useState } from "react";
// import Link from "next/link";
import BackButton from "app/Components";
// import CircularProgressBar from "./CircularProgressBar";
import "./page.css";

interface Day {
  id: number;
  name: string;
  selected?: boolean;
}

const days: Day[] = [
  { id: 10, name: "Lun" },
  { id: 11, name: "Mar" },
  { id: 12, name: "Mié" },
  { id: 13, name: "Jue" },
  { id: 14, name: "Vie" }
];

const Index = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const percentage = 80;
  const percentage2 = 20;

  return (
    <div className="shadow-lg mx-auto w-90">
      <Navbar />
      <BackButton />
      <div className="shadow-lg rounded-md w-full my-4 flex flex-row items-centerjustify-between  p-4">
        <Image src={avatar} alt="logo" className="w-20 h-20" />
        <div>
          <div className="flex justify-between mx-4">
            <p className="ml-4 font-sans text-sm">Hola Admin!</p>
            <br />
          </div>
          <p className="font-bold text-lg font-sans ml-4"> Gestionar pedidos</p>
        </div>
      </div>
      <div className="rounded-md w-full my-4 flex flex-row justify-center p-4">
        <ul className="w-full flex justify-around overflow-x-auto overflow-hidden whitespace-nowrap items-center">
          {days.map((day) => (
            <li
              key={day.id}
              className={
                day.name === "Lun"
                  ? "bg-yellow-500 rounded-45 m-2 p-4 h-20vh w-6vw flex items-center flex-col justify-center"
                  : "bg-blue-500 rounded-45 m-2 p-4 h-20vh w-6vw flex items-center flex-col justify-center"
              }
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "1.5rem"
                }}
              >
                {day.id}
              </p>
              <p style={{ color: "white" }}>{day.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="detalles"
        className="rounded-md w-full my-4 flex flex-col justify-center items-center p-4"
      >
        <h1
          className="cursor-pointer w-90 flex justify-between font-bold"
          onClick={handleToggle}
        >
          09/07/23 - Detalles
          <Image src={dropdown} alt="dropdown" width={13} height={9} />
        </h1>
        {isExpanded && (
          <>
            <>
              <div
                id="container"
                className="flex w-90 py-4 mx-auto items-center sm:justify-between"
              >
                <section
                  className="circular-progress"
                  style={{
                    background: `conic-gradient(${
                      percentage2 < 50 ? "#6373F7" : "#FEBD93"
                    } ${percentage2 * 3.6}deg, #ededed 0deg)`
                  }}
                >
                  <span className="absolute font-bold">{`${percentage2}%`}</span>
                </section>
                <section
                  id="container-state"
                  className="flex flex-col ml-8 w-45"
                >
                  <p className="my-0 mb-2 font-bold">Repartidores</p>
                  <div className="flex items-center">
                    <p
                      id="state"
                      className="my-0 text-gray-paragraphs"
                      style={{ color: "black" }}
                    >
                      2/10 activos
                    </p>
                  </div>
                </section>
                <section className="image-profile-delivery ml-2">
                  <Image src={avatar2} alt={"profile-picture"} />
                </section>
              </div>
              <button className="bg-dark-blue-button rounded mt-4 w-25vw h-5vh text-white font-bold">
                VER REPARTIDORES
              </button>
            </>
            <>
              <div
                id="container"
                className="flex w-90 py-4 pt-20 mx-auto items-center"
              >
                <section
                  className="circular-progress"
                  style={{
                    background: `conic-gradient(${
                      percentage < 50 ? "#6373F7" : "#FEBD93"
                    } ${percentage * 3.6}deg, #ededed 0deg)`
                  }}
                >
                  <span className="absolute font-bold">{`${percentage}%`}</span>
                </section>
                <section
                  id="container-state"
                  className="flex flex-col ml-21 pl-0.5 w-45"
                >
                  <p className="my-0 mb-2 font-bold">Paquetes</p>
                  <div className="flex items-center">
                    <p
                      id="state"
                      className="my-0 text-gray-paragraphs"
                      style={{ color: "black" }}
                    >
                      16/20 repartos
                    </p>
                  </div>
                </section>
              </div>
              <button className="bg-dark-blue-button rounded mt-4 w-25vw h-5vh text-white font-bold">
                VER PAQUETES
              </button>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
