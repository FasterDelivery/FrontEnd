"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navbar, Button } from "app/Components";
import dropdown from "./Assets/dropdown.png";
import polygon from "./Assets/polygon.png";
import trash from "./Assets/trash.png";
import Link from "next/link";
import "./page.css";
import HomePage from "./home/page";

export default function Home() {
  const [controllDropdown, setControllDropdown] = useState({
    history: "controllDropdownHistory",
    delivery: "controllDropdownDelivery"
  });

  const controllDropdwonF = (e: any) => {
    e.stopPropagation();
    console.log(e.target.id, e.target.className);
    if (e.target.id === "history") {
      if (controllDropdown.history === "controllDropdownHistory") {
        setControllDropdown({
          ...controllDropdown,
          history: "controllDropdownHistory active"
        });
      } else {
        setControllDropdown({
          ...controllDropdown,
          history: "controllDropdownHistory"
        });
      }
    } else {
      if (controllDropdown.delivery === "controllDropdownDelivery") {
        setControllDropdown({
          ...controllDropdown,
          delivery: "controllDropdownDelivery active"
        });
      } else {
        setControllDropdown({
          ...controllDropdown,
          delivery: "controllDropdownDelivery"
        });
      }
    }
  };

  return (
    <div className="mx-auto w-90">
      <Navbar />
      <div className="flex flex-col justify-start mx-auto items-center">
        <Link href="packages">
          <Button buttonText="OBTENER PAQUETES" />
        </Link>
        <div
          className={`${controllDropdown.delivery} shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4`}
        >
          <section
            id="delivery"
            onClick={(e) => {
              e.stopPropagation();
              controllDropdwonF(e);
            }}
          >
            <div id="delivery" className="flex justify-between mx-4">
              <p id="delivery" className="font-bold text-lg font-sans">
                Repartos Pendientes
              </p>
              <Image
                id="delivery"
                className="h-max-content"
                src={
                  controllDropdown.delivery === "controllDropdownDelivery"
                    ? dropdown
                    : polygon
                }
                alt="dropdown"
                width={13}
              />
            </div>
            <p id="delivery" className="ml-4 font-sans text-sm">
              No tenés repartos pendientes
            </p>
          </section>
          <div className="divide-y">
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <p className="font-sans text-sm mr-8">
                      Amenabar 2356, CABA
                    </p>
                    <Image className="h-5" src={trash} alt="trash" width={16} />
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
                    <Image className="h-5" src={trash} alt="trash" width={16} />
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
                    <p className="font-sans text-sm mr-8">Mendoza 1810, CABA</p>
                    <Image className="h-5" src={trash} alt="trash" width={16} />
                  </div>
                  <p className="font-sans text-sm font-bold self-end text-yellow-300">
                    En curso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${controllDropdown.history} shadow-lg rounded-md w-full my-4 flex flex-col justify-center p-4`}
        >
          <section id="history" onClick={(e) => controllDropdwonF(e)}>
            <div id="history" className="flex justify-between mx-4">
              <p id="history" className="font-bold text-lg font-sans">
                Historial de Repartos
              </p>
              <Image
                id="history"
                className="h-max-content"
                src={
                  controllDropdown.history === "controllDropdownHistory"
                    ? dropdown
                    : polygon
                }
                alt="dropdown"
                width={13}
              />
            </div>
            <p id="history" className="ml-4 font-sans text-sm">
              {" "}
              Ya repartiste 58 paquetes
            </p>
          </section>
          <div className="divide-y">
            <div className="flex justify-between py-4 h-110px w-full">
              <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
              <div className="">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <p className="font-sans text-sm mr-8">
                      Amenabar 2356, CABA
                    </p>
                    <Image className="h-5" src={trash} alt="trash" width={16} />
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
                    <Image className="h-5" src={trash} alt="trash" width={16} />
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
                    <p className="font-sans text-sm mr-8">Mendoza 1810, CABA</p>
                    <Image className="h-5" src={trash} alt="trash" width={16} />
                  </div>
                  <p className="font-sans text-sm font-bold self-end text-yellow-300">
                    En curso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
