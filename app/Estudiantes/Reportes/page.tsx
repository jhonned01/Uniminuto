import React from "react";
import Title from "../../Title";
import BodyComponent from "./BodyComponent";
import { FaArrowCircleDown } from "react-icons/fa";

function page() {
  return (
    <>
      <Title title="Reporte Resultado Prueba Saber" />

      <div className="flex flex-col container mx-auto">
        <h1 className="w-[80%] flex flex-col justify-center items-center mx-auto text-white text-xl font-medium bg-[#0c1790] mt-4 text-center p-3 rounded-lg gap-2">
          Seleccione Grupo, Estudiante, Semestre y Prueba para ver el reporte
          <FaArrowCircleDown className="text-2xl animate-bounce" />
        </h1>
        <BodyComponent />
      </div>
    </>
  );
}

export default page;
