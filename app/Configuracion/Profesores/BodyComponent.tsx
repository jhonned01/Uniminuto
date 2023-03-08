"use client";
import React, { useState } from "react";
import { Docente, VisibilidadModal } from "../../../typings";
import TitleButton from "../TitleButton";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import TableDocentes from "./TableDocentes";
import { Lightbox } from "react-modal-image";
import AsignacionInput from "./AsignacionInput";

type props = {
  data: Docente[];
};

const BodyComponent = ({ data }: props) => {
  const [showModal, setShowModal] = useState({
    AddVisible: false,
    EditVisible: false,
    ActualizarHorario: false,
  } as VisibilidadModal);

  const [Docentes, setDocentes] = useState<Docente[]>(data);

  const [Horario, setHorario] = useState<Docente[]>(data);

  const [InfoEditar, setInfoEditar] = useState({} as Docente);

  const [ShowImage, setShowImage] = useState<{
    Image: string;
    Visible: boolean;
  }>({
    Image: "",
    Visible: false,
  });

  return (
    <>
      <TitleButton title="Profesores">
        {showModal?.AddVisible && (
          <ModalAdd setShowModal={setShowModal} setDocentes={setDocentes} />
        )}

        {showModal?.EditVisible && (
          <>
            <ModalEdit
              setShowModal={setShowModal}
              InfoEditar={InfoEditar}
              setDocentes={setDocentes}
            />
          </>
        )}

        {showModal?.ActualizarHorario && (
          <>
            <AsignacionInput
              setShowModal={setShowModal}
              InfoEditar={InfoEditar}
              setHorario={setHorario}
            />
          </>
        )}

        <div>
          <button
            autoFocus
            onClick={() =>
              setShowModal({
                AddVisible: true,
              })
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

            <span>Agregar Profesor</span>
          </button>
        </div>
      </TitleButton>
      {ShowImage?.Visible && (
        <Lightbox
          medium={ShowImage?.Image}
          // large={ShowImage?.Image}
          // alt="Imagen COlaborador"
          onClose={(ShowImage: any) =>
            setShowImage({ Image: "", Visible: false })
          }
          hideDownload={true}
          hideZoom={true}
          showRotate={false}
        />
      )}
      <TableDocentes
        info={Docentes}
        setDocentes={setDocentes}
        setShowModal={setShowModal}
        setInfoEditar={setInfoEditar}
        setShowImage={setShowImage}
        setHorario={setHorario}
      />
    </>
  );
};

export default BodyComponent;
