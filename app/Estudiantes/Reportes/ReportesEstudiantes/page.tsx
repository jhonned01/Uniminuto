import Title from "@/app/Title";
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import BodyComponent from "./BodyComponent";

function page() {
  return (
    <>
      <Title title="Reporte Resultados Prueba Saber para Estudiantes" />

      <div className="flex flex-col container mx-auto">
        {/* <h1 className="w-[60%] flex flex-col justify-center items-center mx-auto text-white lg:text-xl font-medium bg-[#0c1790] mt-4 text-center p-3 rounded-lg gap-2">
          Seleccione Grupo, Estudiante, Semestre y Prueba para ver el reporte
          <FaArrowCircleDown className="text-2xl animate-bounce" />
        </h1> */}
        <BodyComponent />
      </div>
    </>
  );
}

export default page;
