"use client";
import React, { useState } from "react";
import { VisibilidadModal } from "../../../typings";
import TitleButton from "../TitleButton";
import EditRectoria from "./EditRectoria";
import ModalEditSede from "./EditSede";
import ModalAdd from "./ModalAdd";
import TableSedeRectoria from "./TableSedeRectoria";

type Props = {
  info: any;
};

const BodyComponet = ({ info }: Props) => {
  const [ShowModal, setShowModal] = useState({
    AddVisible: false,
    EditVisible: false,
  } as VisibilidadModal);

  const [Rectorias, setRectorias] = useState(Object.values(info));

  const [InfoEditar, setInfoEditar] = useState({});
  return (
    <>
      {ShowModal.AddVisible && (
        <ModalAdd setShowModal={setShowModal} setRectorias={setRectorias} />
      )}

      {ShowModal.EditVisible && (
        <EditRectoria
          setShowModal={setShowModal}
          setRectorias={setRectorias}
          InfoEditar={InfoEditar}
        />
      )}
      {ShowModal.Actualizar && (
        <ModalEditSede
          setShowModal={setShowModal}
          setRectorias={setRectorias}
          InfoEditar={InfoEditar}
        />
      )}
      <TitleButton title="Rectoría y Sede">
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

            <span>Agregar Rectoría o Sede</span>
          </button>
        </div>
      </TitleButton>

      <TableSedeRectoria
        info={Rectorias}
        setRectorias={setRectorias}
        setInfoEditar={setInfoEditar}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BodyComponet;
