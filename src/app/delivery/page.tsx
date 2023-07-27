"use client";
import React, { useState, useEffect } from "react";
import Map from "./mapa";
import Image from "next/image";
import dropdown from "../Assets/dropdown.png";
import { BackButton, Navbar } from "app/Components";
import { useAppSelector } from "redux/hooks";
import axios from "axios";
import { Package } from "app/interfaces/packages";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const App: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.users);
  const token = useAppSelector((state) => state.token);

  const initialPackage: Package = {
    fullAdress: "123 Main Street, Cityville, Provinceville, 12345",
    coordinates: "lat: 40.7128, lng: -74.0060",
    id: 1,
    clientname: "John Doe",
    image: "https://example.com/package-image.jpg",
    quantity: 1,
    weight: 2.5,
    deliveryday: new Date(),
    street: "Main Street",
    number: 123,
    city: "Cityville",
    province: "Provinceville",
    postalCode: "12345",
    lat: 40.7128,
    lng: -74.006,
    status: "pending"
  };

  const [paquete, setPaquete] = useState<Package>(initialPackage);

  const destination: google.maps.LatLngLiteral = {
    lat: -22.977635749850354,
    lng: -46.98865870252204
  };
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const idQuery = urlParams.get("package");
        const id = idQuery?.split("?")[0]
          ? parseInt(idQuery?.split("?")[0])
          : 0;
        const response = await axios.get(
          `https://3.91.204.112/api/packages/${user.id}/packages`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const packages = response.data.packages;
        const filtered = packages.filter((each: Package) => each.id === id);
        setPaquete(filtered[0]);
      } catch (error) {
        console.log(error);
        return null;
      }
    };
    fetchPackages();
  }, []);

  const HandleFinalizar = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idQuery = urlParams.get("package");
    const id = idQuery?.split("?")[0] ? parseInt(idQuery?.split("?")[0]) : 0;
    console.log(token);
    axios
      .put(
        `https://3.91.204.112/api/packages/${user.id}/edit/package/${id}`,
        {
          status: "entregado"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        Swal.fire({
          title: "Entrega Finalizada",
          text: `Entregaste el paquete a ${response.data.editedPackage.clientname}`,
          icon: "success",
          confirmButtonText: "Continuar a Repartos",
          confirmButtonColor: "#217BCE"
        });
        router.push("/");
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Error",
          text: "Ocurrió un error en el registro.",
          icon: "error",
          confirmButtonColor: "#217BCE"
        });
      });
  };
  return (
    <>
      <Navbar />
      <div className="py-6">
        <div className="w-90 mx-auto">
          <button className="">
            <BackButton />
          </button>
        </div>
        <div
          className="w-90 top-0 bg-white shadow-sm rounded-md mx-auto px-6 mb-6"
          style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)" }}
        >
          <section className="flex justify-between">
            <div className="py-6 font-bold font-sans text-base leading-tight">
              Reparto en curso
            </div>
            <button className="">
              <Image src={dropdown} alt="dropdown" />
            </button>
          </section>
          <section className="">
            <Map destination={destination} />
          </section>
          <section className="flex flex-col py-4">
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                Destino:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                {paquete.fullAdress}
              </p>
            </div>
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                # del paquete:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                {paquete.id}
              </p>
            </div>
            <div className="flex">
              <p className="text-gray-paragraphs font-bold text-base text-sm-90">
                Recibe:
              </p>
              <p className="ml-2 text-gray-paragraphs text-base text-sm-90">
                {paquete.clientname}
              </p>
            </div>
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="font-roboto font-medium text-base leading-6 tracking-wider rounded shadow text-white bg-dark-blue-button hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={HandleFinalizar}
            >
              FINALIZAR
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
