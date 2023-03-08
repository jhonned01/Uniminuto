"use client";
import { useState } from "react";
import { VisibilidadModal } from "../../../typings";
import TitleButton from "../TitleButton";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import TableGradosGrupos from "./TableGradosGrupos";

type Props = {
  grados: Array<any>;
};
const BodyGradosGrupos = ({ grados }: Props) => {
  const [showModal, setShowModal] = useState({
    AddVisible: false,
    EditVisible: false,
  } as VisibilidadModal);
  const [gradosGrupos, setGradosGrupos] = useState<any>(grados);
  const [InfoGradoEditar, setInfoGradoEditar] = useState<any>({});

  return (
    <>
      {showModal?.AddVisible && (
        <ModalAdd
          setShowModal={setShowModal}
          setGradosGrupos={setGradosGrupos}
        />
      )}
      {showModal?.EditVisible && (
        <ModalEdit
          setShowModal={setShowModal}
          InfoGradoEditar={InfoGradoEditar}
          setGradosGrupos={setGradosGrupos}
        />
      )}
      <TitleButton title="Semestres y Grupos">
        <div>
          <button
            autoFocus
            onClick={() =>
              setShowModal((prev) => ({ ...prev, AddVisible: true }))
            }
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

            <span>Agregar Grupos</span>
          </button>
        </div>
      </TitleButton>
      <TableGradosGrupos
        info={gradosGrupos}
        setGradosGrupos={setGradosGrupos}
        setInfoGradoEditar={setInfoGradoEditar}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BodyGradosGrupos;
