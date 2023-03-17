import Title from "@/app/Title";
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import BodyComponent from "./BodyComponent";

function page() {
  return (
    <>
      <Title title="Reporte Resultados Prueba Saber para Estudiantes" />
      <div className="sm:max-w-sm w-full flex flex-col justify-center items-center bg-[#0c1790] mt-4 text-center p-3 rounded-lg gap-2 mx-auto">
        <h1 className="text-white lg:text-xl font-medium">
          Seleccione Semestre y Prueba para ver el reporte
        </h1>
        <FaArrowCircleDown className="text-white text-2xl animate-bounce" />
      </div>
      <BodyComponent />
    </>
  );
}

export default page;
