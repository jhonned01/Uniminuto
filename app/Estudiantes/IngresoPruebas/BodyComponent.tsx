"use client";
import React, { useState } from "react";
import { Pruebas, VisibilidadModal } from "../../../typings";
import Select from "react-select";
import PresentarPrueba from "./PresentarPrueba";

type Props = {
  data: Pruebas[];
};

const BodyComponent = ({ data }: Props) => {
  const [Values, setValues] = useState({} as any);
  const [ShowModal, setShowModal] = useState<VisibilidadModal>({
    AddVisible: false,
  });

  return (
    <>
      {ShowModal?.AddVisible && (
        <PresentarPrueba setShowModal={setShowModal} DataSelected={Values} />
      )}
      <div className="flex mt-10 flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <form>
              <div className="mb-2">
                <label
                  htmlFor="Nombre"
                  className="mb-3 block text-base font-medium text-gray-800"
                >
                  Seleccione la prueba que desea presentar :
                </label>
                <Select
                  options={data}
                  getOptionLabel={(item: any) =>
                    `${item.tipo} - ${item.NombrePrograma} `
                  }
                  getOptionValue={(item) => item.IdPrueba}
                  onChange={(item) => {
                    setValues({ ...Values, PruebaID: item?.IdPrueba });
                  }}
                  placeholder="Seleccione una Opción"
                />
              </div>

              {Values?.PruebaID && (
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal({
                        AddVisible: true,
                      });
                    }}
                    className="BtnHeader ml-20 mt-5 hover:shadow-inner focus:outline-none transition duration-500 ease-in-out text-black transform hover:-translate-x hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Presentar Prueba</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
