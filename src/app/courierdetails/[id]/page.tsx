"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BackButton, Navbar } from "app/Components";
import dropdown from "../../Assets/dropdown.png";
import trash from "../../Assets/trash.png";
import profile from "../../Assets/Ellipse 9.png";
import "../styles.css";
import axios from "axios";

type DropdownState = boolean;
interface I_User {
  name: string;
  surname: string;
  status: string;
  address: string;
}

interface State {
  stateDeliveryData: {
    name: string;
    status: string;
  };
}

const Page = ({ params }: { params: { id: string } }) => {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>(false);
  const [dropdownOpenPending, setDropdownOpenPending] =
    useState<DropdownState>(false);
  const [stateDeliveryData, setStateDeliveryData] = useState<State | null>(
    null
  );
  const [statePackagesData, setStatePackagesData] = useState([]);
  const [packagePending, setPackagesPending] = useState([]);
  const packagesFilter = () => {
    const packages: any = [];
    statePackagesData.map((Package: I_User) => {
      if (Package.status === "pendiente" || Package.status === "en curso")
        packages.push(Package);
    });
    setPackagesPending(packages);
  };

  useEffect(() => {
    const getData = async () => {
      const getDataFetch = await axios.get(
        `http://localhost:3004/api/user/deliveries/${params.id}`
      );
      getDataFetch ? setStateDeliveryData(getDataFetch.data.user) : false;
    };
    getData();
  }, []);

  useEffect(() => {
    const getDataPackages = async () => {
      const getDataFetchPackages = await axios.get(
        `http://localhost:3004/api/packages/${params.id}/packages`
      );
      getDataFetchPackages
        ? setStatePackagesData(getDataFetchPackages.data.packages)
        : false;
    };
    getDataPackages();
  }, []);

  return (
    <div className="mx-auto">
      <Navbar />
      <BackButton />
      <div
        id="container-courier-details"
        className="w-90 mx-auto flex flex-col justify-start mx-auto items-center"
      >
        <div className="shadow-lg rounded-[4px] w-full my-4 flex flex-col justify-center p-4">
          <div className="flex justify-between items-center p-4">
            <div className="flex">
              <Image
                alt="profile"
                src={profile}
                width={40}
                height={40}
                className="self-start"
              />
              <div className="ml-4 flex-col justify-center items-center">
                <p className="font-bold text-lg font-sans">
                  {stateDeliveryData?.stateDeliveryData?.name}
                </p>
                <p className="text-blue-500">
                  {stateDeliveryData?.stateDeliveryData?.status}
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="shadow-lg rounded-[11px] w-full my-4 flex flex-col justify-center p-4">
            <div
              style={{ cursor: "pointer" }}
              className="flex justify-between mx-4"
              onClick={() => {
                packagesFilter();
                setDropdownOpenPending(!dropdownOpenPending);
              }}
            >
              <p className="font-bold text-lg font-sans">Repartos Pendientes</p>
              <Image
                src={dropdown}
                alt="dropdown"
                width={13}
                className="self-start"
              />
            </div>
            {dropdownOpenPending && packagePending
              ? packagePending.map((pack: I_User, key) => {
                  return (
                    <div
                      key={key}
                      className="flex justify-between py-4 h-110px w-full"
                    >
                      <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
                      <div className="">
                        <div className="flex flex-col justify-between h-full">
                          <div className="flex justify-between">
                            <p className="font-sans text-sm mr-8">
                              {pack.address}
                            </p>
                            <Image
                              src={trash}
                              alt="trash"
                              width={16}
                              className="h-5"
                            />
                          </div>
                          <p className="font-sans text-sm font-bold self-end">
                            {pack.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : false}
          </div>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="shadow-lg rounded-[4px] w-full my-4 flex flex-col justify-center p-4"
          >
            <div className="flex justify-between mx-4">
              <p className="font-bold text-lg font-sans">
                Historial de Repartos
              </p>
              <Image
                className={`self-start transition-transform transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                src={dropdown}
                alt="dropdown"
                width={13}
              />
            </div>
            <p className="ml-4 font-sans text-sm"> Ya repartiste 58 paquetes</p>
            {dropdownOpen && statePackagesData
              ? statePackagesData.map((pack: I_User, key) => {
                  return (
                    <div
                      key={key}
                      className="flex justify-between py-4 h-110px w-full"
                    >
                      <div className="w-[80px] h-[80px] bg-[#E8EFFA] border-sm rounded-sm"></div>
                      <div className="">
                        <div className="flex flex-col justify-between h-full">
                          <div className="flex justify-between">
                            <p className="font-sans text-sm mr-8">
                              {pack.address}
                            </p>
                            <Image
                              src={trash}
                              alt="trash"
                              width={16}
                              className="h-5"
                            />
                          </div>
                          <p className="font-sans text-sm font-bold self-end">
                            {pack.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : false}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
