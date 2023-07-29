import React, { useEffect, useState } from "react";
import "./circular.css";
import Image from "next/image";
import profile from "../Assets/profile.png";
import Link from "next/link";
import axios from "axios";

interface Props {
  name: string;
  surname: string;
  status: string;
  id: number;
}

const initialState = {
  allPackages: [],
  packagesActives: [],
  packagesPercentage: 0
};

const Circular: React.FC<Props> = ({ name, surname, status, id }) => {
  const obj: { [key: string]: string } = {
    inactive: "#FF6B6B",
    Finalizó: "#96DB76",
    "Viaje en curso": "#217BCE"
  };
  let json;

  const [token, setToken] = useState<string>(""),
    session = localStorage.getItem("session") || "";
  const [packages, setPackages] = useState(initialState);

  const color = obj[status] || "";

  const calcularPorcentaje = (cantidad: number, total: number) => {
    return Math.round((cantidad / total) * 100);
  };

  useEffect(() => {
    const getAllPackageFunction = async (prop: string) => {
      const getPackages = await axios.get(
        `https://3.91.204.112/api/packages/${id}/packages`,
        {
          headers: {
            Authorization: `Bearer ${prop}`
          }
        }
      );

      const packagesActives = await getPackages.data.packages.filter(
        (packages: { status: string }) => {
          return packages.status === "entregado";
        }
      );

      return setPackages({
        ...packages,
        allPackages: getPackages.data.packages,
        packagesActives,
        packagesPercentage: calcularPorcentaje(
          packagesActives.length,
          getPackages.data.packages.length
        )
      });
    };

    json = JSON.parse(session);

    try {
      if (json && json.value) {
        getAllPackageFunction(json.value);
        setToken(json.value);
      }
    } catch (error) {
      // Handle the error gracefully (if needed)
      console.error("Error parsing JSON:", error);
    }
  }, [token]);

  return (
    <>
      <Link href={`courierdetails/${id}`}>
        <div
          id="container"
          className="flex w-90 py-4 mx-auto items-center sm:justify-between"
        >
          <section
            className="circular-progress"
            style={{
              background: `conic-gradient(${
                packages.packagesPercentage === 100 ? "#96DB76" : "#FCBC11"
              } ${packages.packagesPercentage * 3.6}deg, #ededed 0deg)`
            }}
          >
            <span className="absolute font-bold">{`${packages.packagesPercentage}%`}</span>
          </section>
          <section id="container-state" className="flex flex-col ml-8 w-45">
            <p className="my-0 mb-2 font-bold">{name}</p>
            <p className="my-0 mb-2 font-bold">{surname}</p>
            <div className="flex items-center">
              <p className="my-0 mr-2 h-2 w-2 rounded-lg bg-cyan-text"></p>
              <p
                id="state"
                className="my-0 text-cyan-text font-bold"
                style={{ color: `${color}` }}
              >
                {status}
              </p>
            </div>
          </section>
          <section className="image-profile-delivery ml-2">
            <Image src={profile} alt={"profile-picture"} />
          </section>
        </div>
      </Link>
    </>
  );
};

export default Circular;
