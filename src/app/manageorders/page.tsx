"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "../Assets/Ellipse 10.png";
import dropdown from "../Assets/dropdown.png";
import avatar2 from "../Assets/Ellipse 6.png";
import avatar3 from "../Assets/Ellipse 8.png";
import { Button, Navbar } from "app/Components";
import { useState } from "react";
import Link from "next/link";
import BackButton from "app/Components";
import CircularProgressBar from "./CircularProgressBar";
import { useGetWeekDate } from "app/hooks/useGetWeekDate";

interface IWeek {
  nameDay: string;
  numberDay: string;
}

const arrWeekSpanish: { [key: string]: string } = {
  Mon: "Lunes",
  Tue: "Martes",
  Wed: "Miercoles",
  Thu: "Jueves",
  Fri: "Viernes"
};

const Index = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [stateWeek, setStateWeek] = useState<IWeek[]>([]);
  const getWeekHook = useGetWeekDate();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setStateWeek(getWeekHook);
  }, []);

  const percentage = 100;

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
      <div className=" rounded-md w-full my-4 flex flex-row justify-center p-4">
        <ul className="flex w-90 m-auto justify-between">
          {stateWeek.map((day, i) => (
            <li
              key={i}
              className="bg-dark-blue-button flex-col items-center p-2 h-20vh rounded-40"
            >
              <p>{arrWeekSpanish[day.nameDay]}</p>
              <p>{day.numberDay}</p>
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
            <div className="shadow-lg rounded-md w-full my-4 flex flex-row items-centerjustify-between  p-4">
              <CircularProgressBar percentage={percentage} />
              <h2>Porcentaje 2: 50%</h2>
              <h1>Paquetes</h1>
              <h4>{"{activos / total}"} repartidos</h4>
              <Link href="gestionarpaquetes">
                <Button buttonText="VER PAQUETES" />
              </Link>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center h-screen">
          <CircularProgressBar percentage={percentage} />
        </div>
      </div>
    </div>
  );
};

export default Index;
