"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Button } from "../app/Components";
import dropdown from "./Assets/dropdown.png";
import trash from "./Assets/trash.png";
import Link from "next/link";
import { Package } from "./interfaces/packages";
import { useRouter } from "next/navigation";
import imagen from "./Assets/package-icon-vector.jpg";

type DropdownState = boolean;

export default function HomePage() {
  const router = useRouter();
  const [delliveredDropdownOpen, setDeliveredDropdownOpen] =
    useState<DropdownState>(false);
  const [pendingDropdownOpen, setPendingDropdownOpen] =
    useState<DropdownState>(false);

  const [pending, setPending] = useState<Package[]>([]);
  const [delivered, setDelivered] = useState<Package[]>([]);
  const [onCourse, setOnCourse] = useState<Package[]>([]);
  console.log(onCourse);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://3.91.204.112/api/user/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        const id = response.data.id;

        const result = await axios.get(
          `https://3.91.204.112/api/packages/${id}/packages`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
        handleFilterPackages(result.data.packages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFilterPackages = (packages: Package[]) => {
    setPending(
      packages.filter((paquete: Package) => paquete.status === "pendiente")
    );
    setDelivered(
      packages.filter((paquete: Package) => paquete.status === "entregado")
    );
    setOnCourse(
      packages.filter((paquete: Package) => paquete.status === "en curso")
    );
  };

  return (
    <div className="mx-auto w-90">
      <Navbar />
      <div className="max-w-md flex flex-col justify-start mx-auto items-center">
        <Link href="packages">
          <Button buttonText="OBTENER PAQUETES" />
        </Link>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Repartos Pendientes</p>
            <Image
              className={`self-start transition-transform transform ${
                pendingDropdownOpen ? "rotate-180" : ""
              }`}
              src={dropdown}
              alt="dropdown"
              width={13}
              onClick={() => setPendingDropdownOpen(!pendingDropdownOpen)}
            />
          </div>
          <p className="ml-4 font-sans text-sm">
            {pending.length === 0
              ? "No tenés historial de repartos"
              : `Tenés ${pending.length} paquetes pendientes`}
          </p>
          {pendingDropdownOpen && (
            <div className="divide-y">
              {pending.map((paquete: Package, index: number) => {
                return (
                  <div
                    className="flex justify-between py-4 h-110px w-full"
                    key={index}
                  >
                    <Image
                      className="bg-[#E8EFFA] border-sm rounded-sm"
                      src={paquete.image === "imagen" ? paquete.image : imagen}
                      alt="imagen paquete"
                      width={80}
                      height={80}
                    />
                    <div className="">
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex justify-between">
                          <p className="font-sans text-sm mr-8">
                            {paquete.address}
                          </p>
                          <Image
                            className="h-5"
                            src={trash}
                            alt="trash"
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-sans text-sm font-bold self-end">
                          {paquete.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Historial de Repartos</p>
            <Image
              className={`self-start transition-transform transform ${
                delliveredDropdownOpen ? "rotate-180" : ""
              }`}
              src={dropdown}
              alt="dropdown"
              width={13}
              onClick={() => setDeliveredDropdownOpen(!delliveredDropdownOpen)}
            />
          </div>
          <p className="ml-4 font-sans text-sm">
            {delivered.length === 0
              ? "No tenés historial de repartos"
              : `Ya repartiste ${delivered.length} paquetes`}
          </p>
          {delliveredDropdownOpen && (
            <div className="divide-y">
              {delivered.map((paquete: Package, index: number) => {
                return (
                  <div
                    className="flex justify-between py-4 h-110px w-full"
                    key={index}
                  >
                    <Image
                      className="bg-[#E8EFFA] border-sm rounded-sm"
                      src={paquete.image === "imagen" ? paquete.image : imagen}
                      alt="imagen paquete"
                      width={80}
                      height={80}
                    />
                    <div className="">
                      <div className="flex flex-col justify-between h-full">
                        <div className="flex justify-between">
                          <p className="font-sans text-sm mr-8">
                            {paquete.address}
                          </p>
                          <Image
                            className="h-5"
                            src={trash}
                            alt="trash"
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-sans text-sm font-bold self-end">
                          {paquete.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
