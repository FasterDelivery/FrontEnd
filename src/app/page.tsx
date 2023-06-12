"use client";
import "./globals.css";
import React, { useState } from "react";
import Link from "next/link";
import "./layout";
import axios from "axios";

export default function Home() {
  const [pruebaBack, setPruebaBack] = useState("");

  const handleTest = () => {
    // axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
    // setPruebaBack(res.data[0].image);

    axios
      .get("http://localhost:3001")
      .then((res) => {
        setPruebaBack(res.data);
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div>
      <h1 className="text-red-400"> HOLA MUNDO </h1>
      <Link href="repartidores">
        {" "}
        <p> Entrar al home </p>{" "}
      </Link>
      <div style={{ height: "500px" }}> separacion </div>

      <h2 onClick={handleTest}> Realizar pruba de Back </h2>

      <p style={{ backgroundColor: "red", fontSize: "90px" }}>{pruebaBack}</p>
    </div>
  );
}
