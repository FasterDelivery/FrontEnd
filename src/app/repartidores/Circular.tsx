import React from "react";
import "./circular.css";
import Image from "next/image";
import profile from "../Assets/profile.png";

interface Props {
  percentage: number;
  name: string;
  state: string;
}

const Circular: React.FC<Props> = ({ percentage, name, state }) => {
  const obj: { [key: string]: string } = {
    "Inactivo": "#FF6B6B",
    "Finalizó": "#96DB76",
    "Viaje en curso": "#217BCE"
  };

  const color = obj[state] || "";

  return (
    <div className="flex w-90 py-4 mx-auto items-center">
      <section
        className="circular-progress"
        style={{
          background: `conic-gradient(${
            percentage === 100 ? "#96DB76" : "#FCBC11"
          } ${percentage * 3.6}deg, #ededed 0deg)`
        }}
      >
        <span className="absolute font-bold">{`${percentage}%`}</span>
      </section>
      <section className="flex flex-col ml-8 w-45">
        <p className="my-0 mb-2 font-bold">{name}</p>
        <div className="flex items-center">
          <p className="my-0 mr-2 h-2 w-2 rounded-lg bg-cyan-text"></p>
          <p className="my-0 text-cyan-text font-bold" style={{ color: `${color}` }}>
            {state}
          </p>
        </div>
      </section>
      <section className="image-profile-delivery ml-2">
        <Image src={profile} alt={"profile-picture"} />
      </section>
    </div>
  );
};

export default Circular;
