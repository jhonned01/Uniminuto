"use client";
import React from "react";
import CompSelect from "./CompSelect";
import ReactSelect from "react-select";

let programa = [
  {
    value: 1,
    label: "INGENIERIA DE SISTEMAS",
  },
];
let semestre = [
  {
    value: 1,
    label: "Semestral",
  },
];

function BodyComponent() {
  return (
    <>
      <div className="flex mt-10 flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md border-2 border-gray-400">
            <form>
              <div className="mb-3">
                <label className="mb-2 block text-base font-medium text-gray-800">
                  Seleccione el Programa{" "}
                  <span className="text-red-900">(*)</span>
                </label>
                <ReactSelect
                  className="dark:text-black"
                  options={programa}
                  placeholder="Seleccione una Opción"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-base font-medium text-gray-800">
                  Seleccione el Semestre{" "}
                  <span className="text-red-900">(*)</span>
                </label>
                <ReactSelect
                  className="dark:text-black"
                  options={semestre}
                  placeholder="Seleccione una Opción"
                />
              </div>
              <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Ver Reporte
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* select primero */}
      {/* <div className="flex flex-col justify-center">
        <div className="w-[50%] mx-auto bg-[#e7f1fe] rounded-b-xl border-2 border-[#a0b5d0] flex flex-col items-center justify-center gap-3 p-4">
          <CompSelect
            title="Grado y Grupo: "
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
      </div> */}
    </>
  );
}

export default BodyComponent;
