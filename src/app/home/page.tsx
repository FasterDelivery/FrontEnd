"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Button } from "app/Components";
import dropdown from "../Assets/dropdown.png";
import trash from "../Assets/trash.png";
import Link from "next/link";
import { Package } from "app/interfaces/packages";

type DropdownState = boolean;

export default function HomePage({}) {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>(false);
  const [pending, setPending] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [onCourse, setOnCourse] = useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:3001/api/1/packages`)
    .then(res=>{
      console.log(res.data)
      const packages = res.data;
      setPending(packages.filter((paquete:Package)=>paquete.status==="Pendiente"))
      setDelivered(packages.filter((paquete:Package)=>paquete.status==="Entregado"))
      setOnCourse(packages.filter((paquete:Package)=>paquete.status==="En curso"))
    })
  },[])
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
              className="self-start"
              src={dropdown}
              alt="dropdown"
              width={13}
            />
          </div>
          <p className="ml-4 font-sans text-sm">No tenés repartos pendientes</p>
        </div>
        <div className="shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between mx-4">
            <p className="font-bold text-lg font-sans">Historial de Repartos</p>
            <Image
              className={`self-start transition-transform transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              src={dropdown}
              alt="dropdown"
              width={13}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>
          <p className="ml-4 font-sans text-sm"> Ya repartiste 58 paquetes</p>
          {dropdownOpen && (
            <div className="divide-y">
              <div className="flex justify-between py-4 h-110px w-full">
                <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
                <div className="">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between">
                      <p className="font-sans text-sm mr-8">
                        Amenabar 2356, CABA
                      </p>
                      <Image
                        className="h-5"
                        src={trash}
                        alt="trash"
                        width={16}
                      />
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
                        Av. Carabobo y Rivadavia, CABA
                      </p>
                      <Image
                        className="h-5"
                        src={trash}
                        alt="trash"
                        width={16}
                      />
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
                        Mendoza 1810, CABA
                      </p>
                      <Image
                        className="h-5"
                        src={trash}
                        alt="trash"
                        width={16}
                      />
                    </div>
                    <p className="font-sans text-sm font-bold self-end text-yellow-300">
                      En curso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
