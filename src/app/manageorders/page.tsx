"use client";
/* eslint-disable */
import React, { useEffect } from "react";
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
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

interface Day {
  id: number;
  name: string;
  selected?: boolean;
}

const days: Day[] = [
  { id: 17, name: "Lun" },
  { id: 18, name: "Mar" },
  { id: 19, name: "Mié" },
  { id: 20, name: "Jue" },
  { id: 21, name: "Vie" }
];

const Index = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false),
    dateActually = new Date(),
    [stateController, setStateController] = useState({
      allPackages: [],
      packagesActives: [],
      deliveryPersons: [],
      usersActives: [],
      packagesPercentage: 0,
      usersPercentage: 0
    }),
    handleToggle = () => {
      setIsExpanded(!isExpanded);
    }

  const calcularPorcentaje = (cantidad: number, total: number) => {
    return Math.round((cantidad / total) * 100);
  };

  useEffect(() => {
    const getDataDeliveryPers = async () => {
      const request1 = axios.get("http://localhost:3004/api/packages");
      const request2 = axios.get("http://localhost:3004/api/user/deliveries");

      axios
        .all([request1, request2])
        .then(
          axios.spread((response1, response2) => {
            // Maneja las respuestas individuales aquí
            const packages = response1.data.allPackages,
              users = response2.data.allUsers;

            const packagesActives = packages.filter(
              (packages: { status: string }) => packages.status === "entregado"
            );

            const usersActives = users.filter(
              (users: { status: string }) => users.status === "active"
            );

            setStateController({
              ...stateController,
              allPackages: packages,
              packagesActives: packagesActives,
              deliveryPersons: users,
              usersActives: usersActives,
              usersPercentage: calcularPorcentaje(
                parseFloat(usersActives.length),
                parseFloat(users.length)
              ),
              packagesPercentage: calcularPorcentaje(
                parseFloat(packagesActives.length),
                parseFloat(packages.length)
              )
            });
          })
        )
        .catch((error) => {
          // Maneja los errores aquí
          console.log(error);

          Swal.fire({
            title: "Error",
            text: `${error}`,
            icon: "error",
            confirmButtonColor: "#217BCE"
          });
        });
    };
    getDataDeliveryPers();
  }, []);

  return (
    <div className="shadow-lg mx-auto w-full">
      <Navbar />
      <BackButton />
      <div className="shadow-lg rounded-md mx-auto w-90 my-4 flex flex-row items-centerjustify-between  p-4">
        <Image src={avatar} alt="logo" className="w-20 h-20" />
        <div>
          <div className="flex justify-between mx-4">
            <p className="ml-4 font-sans text-sm">Hola Admin!</p>
            <br />
          </div>
          <p className="font-bold text-lg font-sans ml-4"> Gestionar pedidos</p>
        </div>
      </div>
      <div className="rounded-md w-90 mx-auto my-4 flex flex-row justify-center p-4">
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
          {`${dateActually.toString().slice(0, 15)} - Detalles`}
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
                      stateController.usersPercentage < 50
                        ? "#6373F7"
                        : "#FEBD93"
                    } ${
                      stateController.usersPercentage * 3.6
                    }deg, #ededed 0deg)`
                  }}
                >
                  <span className="absolute font-bold">{`${stateController.usersPercentage}%`}</span>
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
                      {`${stateController.allPackages.length}/${stateController.packagesActives.length} activos`}
                    </p>
                  </div>
                </section>
                <section className="image-profile-delivery ml-2">
                  <Image src={avatar2} alt={"profile-picture"} />
                </section>
              </div>
              <Link
                href={"deliverypersons"}
                className="flex items-center justify-center bg-dark-blue-button rounded mt-4 w-25vw h-5vh text-white font-bold"
              >
                <h3>REPARTIDORES</h3>
              </Link>
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
                      stateController.packagesPercentage < 50
                        ? "#6373F7"
                        : "#FEBD93"
                    } ${
                      stateController.packagesPercentage * 3.6
                    }deg, #ededed 0deg)`
                  }}
                >
                  <span className="absolute font-bold">{`${stateController.packagesPercentage}%`}</span>
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
                      {`${stateController.allPackages.length}/${stateController.packagesActives.length} repartos`}
                    </p>
                  </div>
                </section>
              </div>
              <Link
                href={"packages"}
                className="flex items-center justify-center bg-dark-blue-button rounded mt-4 w-25vw h-5vh text-white font-bold"
              >
                <h3>VER PAQUETES</h3>
              </Link>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
