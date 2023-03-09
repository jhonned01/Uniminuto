"use client";
import React from "react";
import CompSelect from "./CompSelect";

function BodyComponent() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="w-[50%] mx-auto bg-[#e7f1fe] rounded-b-xl border-2 border-[#a0b5d0] flex flex-col items-center justify-center gap-3 p-4">
          <CompSelect
            title="Grupo: "
            select={""}
            placeholder="Seleccione un Grupo"
          />
          <CompSelect
            title="Estudiante: "
            select={""}
            placeholder="Seleccione un Estudiante"
          />
          <CompSelect
            title="Semestre: "
            select={""}
            placeholder="Seleccione un Semestre"
          />
          <CompSelect
            title="Prueba: "
            select={""}
            placeholder="Seleccione una Prueba"
          />
          <button className="border-2 border-[#0c1790] p-2 text-[#0c1790] hover:bg-[#0c1790] rounded-lg hover:text-white hover:rounded-full hover:scale-105 transition duration-300 ease-in-out transform">
            Ver Reporte
          </button>
        </div>
      </div>
    </>
  );
}

export default BodyComponent;
