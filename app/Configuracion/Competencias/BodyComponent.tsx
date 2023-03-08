"use client";

import React, { useState } from "react";
import { Competencia } from "../../../typings";
import TitleButton from "../TitleButton";
import ModalAdd from "./ModalAdd";
import TableCompetencias from "./TableCompetencias";

type props = {
  data: Competencia[];
};
const BodyComponent = ({ data }: props) => {
  const [Competencias, setCompetencias] = useState<Competencia[]>(data);
  const [showModal, setShowModal] = useState(false);
  const [InfoEditar, setInfoEditar] = useState<Competencia | {}>({});

  return (
    <>
      {showModal && (
        <ModalAdd
          setShowModal={setShowModal}
          setCompetencias={setCompetencias}
          InfoEditar={InfoEditar}
        />
      )}
      <TitleButton title="Competencias">
        <div>
          <button
            autoFocus
            onClick={() => {
              setShowModal(true);
              setInfoEditar({});
            }}
            className="BtnHeader hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 "
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

            <span>Agregar Competencia</span>
          </button>
        </div>
      </TitleButton>
      <TableCompetencias
        info={Competencias}
        setCompetencias={setCompetencias}
        setInfoEditar={setInfoEditar}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BodyComponent;
