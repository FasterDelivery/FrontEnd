import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png"

export function Navbar(){
    return(
        <nav
        style={{
          borderBottom: "1px solid gray",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        <Image
          src={logo}
          alt="logo"
          style={{ width: "51px", height: "32px" }}
        />
      </nav>
    )
}