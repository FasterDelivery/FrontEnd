"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setUser } from "redux/features/users";
import { setPackages } from "redux/features/packages";
import Image from "next/image";
import { Navbar, Button } from "../app/Components";
import dropdown from "./Assets/dropdown.png";
import trash from "./Assets/trash.png";
import Link from "next/link";
import { Package } from "./interfaces/packages";
import { useRouter } from "next/navigation";
import imagen from "../app/Assets/package-icon-vector.jpg";
import { setToken } from "redux/features/token";

type DropdownState = boolean;

export default function HomePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users);
  const packages = useAppSelector((state) => state.packages);
  const router = useRouter();
  const [delliveredDropdownOpen, setDeliveredDropdownOpen] =
    useState<DropdownState>(false);
  const [pendingDropdownOpen, setPendingDropdownOpen] =
    useState<DropdownState>(false);
  const [onCourseDropdownOpen, setOnCourseDropdownOpen] =
    useState<DropdownState>(false);
  const fetchUser = async (token: string) => {
    try {
      const response = await axios.get("https://3.91.204.112/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(setUser(response.data));
      if (response.data.isAdmin) return router.push("/manageorders");
      return response.data;
    } catch (error) {
      console.log(error);
      localStorage.removeItem("session");
      return router.push("/login");
    }
  };

  const fetchPackages = async (id: number, token: string) => {
    try {
      const response = await axios.get(
        `https://3.91.204.112/api/packages/${id}/packages`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      dispatch(setPackages(response.data.packages));
      return response.data.packages;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleDetail = (packageId: number) => () => {
    router.push(`/delivery?package=${packageId}`);
  };

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem("session") || "{}");

    if (!localStorage.getItem("session") || !json.value) {
      router.push("/login");
      return;
    }

    if (json.value !== "" && user.id === 0) {
      dispatch(setToken(json.value));
      fetchUser(json.value);
    }
  }, [packages]);

  useEffect(() => {
    // Check if user is defined and now is greater than the expiry time
    if (user && user.id !== 0) {
      const now = new Date().getTime();
      const session = JSON.parse(localStorage.getItem("session") || "{}");
      const expiry = session.expiry || 0;

      if (now > expiry) {
        router.push(`affidavit?id=${user.id}&token=${session.value}`);
      } else {
        fetchPackages(user.id, session.value);
      }
    }
  }, [user]);

  console.log(user, packages);

  return (
    <div className="mx-auto w-90">
      <Navbar />
      <div className="max-w-md flex flex-col justify-start mx-auto items-center">
        <Link href="packages">
          <Button buttonText="OBTENER PAQUETES" />
        </Link>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Repartos En Curso</p>
            <Image
              className={`self-start transition-transform transform ${
                onCourseDropdownOpen ? "rotate-180" : ""
              }`}
              src={dropdown}
              alt="dropdown"
              width={13}
              onClick={() => setOnCourseDropdownOpen(!onCourseDropdownOpen)}
            />
          </div>
          <p className="ml-4 font-sans text-sm">
            {packages["en curso"].length === 0
              ? "No tenés historial de repartos"
              : `Tenés ${packages["en curso"].length} paquetes por entregar hoy`}
          </p>
          {onCourseDropdownOpen && (
            <div className="divide-y">
              {packages["en curso"].map((paquete: Package) => {
                return (
                  <div
                    className="flex justify-between py-4 h-110px w-full"
                    key={paquete.id}
                    onClick={handleDetail(paquete.id)}
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
                            {`${paquete.street} ${paquete.number} ${paquete.city}`}
                          </p>
                          <Image
                            className="h-5"
                            src={trash}
                            alt="trash"
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-sans text-sm self-end">
                          {paquete.clientname}
                        </p>
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
            {packages.pendiente.length === 0
              ? "No tenés historial de repartos"
              : `Tenés ${packages.pendiente.length} paquetes pendientes`}
          </p>
          {pendingDropdownOpen && (
            <div className="divide-y">
              {packages.pendiente.map((paquete: Package) => {
                return (
                  <div
                    className="flex justify-between py-4 h-110px w-full"
                    key={paquete.id}
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
                        <p className="font-sans text-sm self-end">
                          {`${paquete.street} ${paquete.number} ${paquete.city}`}
                        </p>

                        <p className="font-sans text-sm self-end">
                          {paquete.clientname}
                        </p>
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
            {packages.entregado.length === 0
              ? "No tenés historial de repartos"
              : `Ya repartiste ${packages.entregado.length} paquetes`}
          </p>
          {delliveredDropdownOpen && (
            <div className="divide-y">
              {packages.entregado.map((paquete: Package) => {
                return (
                  <div
                    className="flex justify-between py-4 h-110px w-full"
                    key={paquete.id}
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
                            {`${paquete.street} ${paquete.number} ${paquete.city}`}
                          </p>
                          <Image
                            className="h-5"
                            src={trash}
                            alt="trash"
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-sans text-sm self-end">
                          {paquete.clientname}
                        </p>
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
