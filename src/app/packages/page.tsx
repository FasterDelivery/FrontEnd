"use client";
import React, { useEffect, useState } from "react";
import { BackButton, Navbar } from "app/Components";
import axios from "axios";
import Image from "next/image";
import imagen from "../Assets/package-icon-vector.jpg";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const GetPackages = () => {
  const router = useRouter();
  const [packagesDay, setPackagesDay] = useState<any>([]);
  const [packagesTaken, setPackagesTaken] = useState<any>([]);

  const currentDate = new Date().toISOString().slice(0, 10);

  const handleTomarPaquete = (paquete: any) => {
    const updatedPackagesTaken = [...packagesTaken];
    updatedPackagesTaken.push(paquete);
    setPackagesTaken(updatedPackagesTaken);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/packages/packages",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA5JHRyRDlvZnh1L0dNSDA0cHdqN3ZZWWVUenEwTlVVOGp0a0xjZ0dQV2dEdVVqVVpRWkE5ZC9TIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE2OTA0MDQ2NjQsImV4cCI6MTY5MDQxMTg2NH0.s7tnUnYodsiO3R_LdYNZHvPpSVeCpFAT9q6sYoh1TIQ`
            }
          }
        );
        const allPackagesPending = response.data.allPackages;
        const allPackagesPendingDay = allPackagesPending.filter(
          (item: any) => item.deliveryday.slice(0, 10) === currentDate
        );
        setPackagesDay(allPackagesPendingDay);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(packagesTaken, "estos los agarro ===========");

  const isPackageTaken = (paquete: any) => {
    const isTaken = packagesTaken.some(
      (takenPackage: any) => takenPackage.id === paquete.id
    );
    return isTaken;
  };

  const handleConfirmarPaquetes = async (paquetes: any) => {
    if (packagesTaken.length > 10) {
      return Swal.fire({
        title: "Advertencia",
        text: `No se pueden tomar más de 10 (diez) pedidos por día`,
        icon: "warning",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#217BCE",
        customClass: {
          popup: "sm:w-1/2"
        }
      });
    }
    try {
      const updatedPackages = await Promise.all(
        paquetes.map(async (paquete: any) => {
          const response = await axios.put(
            `http://localhost:3001/api/packages/edit/package/${paquete.id}`,
            {
              status: "entregado",
              userId: 2
            },
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA5JHRyRDlvZnh1L0dNSDA0cHdqN3ZZWWVUenEwTlVVOGp0a0xjZ0dQV2dEdVVqVVpRWkE5ZC9TIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE2OTA0MDQ2NjQsImV4cCI6MTY5MDQxMTg2NH0.s7tnUnYodsiO3R_LdYNZHvPpSVeCpFAT9q6sYoh1TIQ"
              }
            }
          );
          router.push("/delivery");
          return response.data.editedPackage;
        })
      );

      console.log("Paquetes actualizados con éxito:", updatedPackages);
    } catch (error) {
      console.error("Error al actualizar los paquetes:", error);
    }
  };

  return (
    <>
      <div className="mx-auto w-90">
        <Navbar />
      </div>

      <div className="max-w-md flex flex-col justify-start mx-auto items-center">
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <BackButton />
          <div className="flex justify-between mx-4 mt-3">
            <p className="font-bold text-lg font-sans"> Obtener Paquetes </p>
          </div>

          <p className="ml-4 font-sans text-sm">
            {" "}
            ¿Cuántos paquetes más vas a repartir hoy?{" "}
          </p>
          <div className="divide-y">
            {packagesDay.map((paquete: any) => (
              <div
                key={paquete.id}
                className="flex justify-between py-4 h-110px w-full"
              >
                <Image
                  className="bg-[#E8EFFA] border-sm rounded-sm"
                  src={imagen}
                  alt="imagen paquete"
                  width={80}
                  height={80}
                />

                <div className="flex justify-between">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between">
                      <p className="font-sans text-sm mr-2 text-right">
                        <span>
                          {" "}
                          {`${paquete.street} ${paquete.number} ${paquete.city}`}
                        </span>{" "}
                        <br />
                        <span>{paquete.clientname} </span>
                        <br />
                        {isPackageTaken(paquete) ? (
                          <p> aca va el otro boton </p>
                        ) : (
                          <button
                            className="w-20 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-1 px-2 rounded mt-2"
                            onClick={() => handleTomarPaquete(paquete)}
                          >
                            Tomar
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 rounded mb-4"
          onClick={() => handleConfirmarPaquetes(packagesTaken)}
        >
          INICIAR JORNADA
        </button>
      </div>
    </>
  );
};

export default GetPackages;
