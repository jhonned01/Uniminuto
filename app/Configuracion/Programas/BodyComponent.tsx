"use client";
import React from "react";
import { Programa } from "../../../typings";
import TitleButton from "../TitleButton";
import ModalAdd from "./ModalAdd";
import TableProgramas from "./TableProgramas";

type props = {
  programas: Programa[];
};

const BodyComponent = ({ programas }: props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [Programas, setProgramas] = React.useState<Programa[]>(programas);
  const [InfoEditar, setInfoEditar] = React.useState<Programa>({} as Programa);

  return (
    <>
      <TitleButton title="Programas">
        {showModal && (
          <ModalAdd
            setShowModal={setShowModal}
            setProgramas={setProgramas}
            InfoEditar={InfoEditar}
          />
        )}
        <div>
          <button
            autoFocus
            onClick={() => {
              setInfoEditar({} as Programa);
              setShowModal(true);
            }}
            className="BtnHeader hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
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

            <span>Agregar Programa</span>
          </button>
        </div>
      </TitleButton>
      <TableProgramas
        info={Programas}
        setProgramas={setProgramas}
        setInfoEditar={setInfoEditar}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BodyComponent;
