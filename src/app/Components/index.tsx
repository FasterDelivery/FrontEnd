"use client";

import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import back from "../Assets/goBack.png";
import { useRouter } from "next/navigation";

export function Navbar() {
  return (
    <nav
      style={{
        borderBottom: "1px solid gray",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <Image src={logo} alt="logo" style={{ width: "51px", height: "32px" }} />
    </nav>
  );
}

export function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <Image
        onClick={handleBack}
        src={back}
        alt="goBack"
        style={{ marginTop: "15px", marginLeft: "10px" }}
      />
    </div>
  );
}
interface ButtonProps {
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <button
      type="submit"
      className=" my-2 text-white bg-[#217BCE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 max-w-md w-screen mx-2"
    >
      {buttonText}
    </button>
  );
};

export default BackButton;
