"use client";
import React, { useState } from "react";
import Circular from "./Circular";
import Image from "next/image";
import dropdown from "../Assets/dropdown.png";
import { BackButton, Navbar } from "app/Components";

interface Item {
  name: string;
  state: string;
  percentage: number;
}

const Page = () => {
  const [items] = useState<Item[]>([
    { name: "Farid", state: "Viaje en curso", percentage: 60 },
    { name: "Luciana", state: "Finalizó", percentage: 100 },
    { name: "Santiago", state: "Inactivo", percentage: 65 }
  ]);

  return (
    <>
    <Navbar/>
    <div className="py-6">
      <div className="w-90 mx-auto">
        <button className="">
          <BackButton/>
        </button>
      </div>
      <div
        className="w-90 top-0 bg-white shadow-sm rounded-md mx-auto px-6 pb-6"
        style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)" }}
      >
        <section className="flex justify-between w-90 mx-auto">
          <div className="py-6 font-bold font-sans text-base leading-tight">
            Repartidores
          </div>
          <button className="">
            <Image src={dropdown} alt="dropdown" />
          </button>
        </section>
        {items.map((User, index) => (
          <Circular
            percentage={User.percentage}
            name={User.name}
            state={User.state}
            key={index}
          />
        ))}
        <div className="flex w-90 mx-auto justify-center py-4 ">
          {[1, 2, 3].map((_, index) => (
            <p
              key={index}
              className="flex my-0 mr-2 h-2 w-2 rounded-lg bg-gray-paragraphs"
            ></p>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
