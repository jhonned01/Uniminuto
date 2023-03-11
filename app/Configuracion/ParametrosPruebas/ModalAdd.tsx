"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import Select from "react-select";
import { Competencia, Docente } from "../../../typings";

import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import Docentes from "./Docentes";
import Estudiantes from "./Estudiantes";
import Competencias from "./Competencias";
import Aprobacion from "./Aprobacion";

type ShowModalType = {
  Visible: boolean;
  TypeTest: string;
  Programa?: number | null;
  SemestreAcademico?: string;
  MaxSemestre?: any;
  StartStudents?: any;
};
type Props = {
  // type props useState
  setShowModal: React.Dispatch<React.SetStateAction<any>>;
  ShowModal: ShowModalType;
  ValuesInfo: {
    Programa: number | null;
    TipoPrueba: string | "";
    IdSubSede: any;
  };
  setPruebas: React.Dispatch<React.SetStateAction<any>>;
};

type ValuesType = {
  SemestreAcademico?: string;
  IdSubSede?: string;
  InicioPrueba?: Date | string;
  FinPrueba?: Date | string;
  TipoPrueba?: string;
  Programa: number | null;
  SemestreId?: number;
  MaxSemestre?: Date;
  MinStrudent: any;
  CompetenciasGenericas:
    | []
    | [
        {
          IdAsignatura: number;
          Abreviatura: string;
          DocenteDocumento: number;
          DocenteId: number;
          NombreAsignatura: string;
          TipoCompetencia: string;
        }
      ];
  CompetenciasEspecificas:
    | []
    | [
        {
          IdAsignatura: number;
          Abreviatura: string;
          DocenteDocumento: number;
          DocenteId: number;
          NombreAsignatura: string;
          TipoCompetencia: string;
        }
      ];
};

const ModalAdd = ({
  setShowModal,
  ShowModal,
  ValuesInfo,
  setPruebas,
}: Props) => {
  function lastDayOfMonth(date: Date, fecha: any) {
    return new Date(date.getFullYear(), fecha, 0).getDate();
  }

  let date = new Date();
  let lastDay = lastDayOfMonth(date, ShowModal.MaxSemestre);
  // let StartDayStudent = lastDayOfMonth(date, ShowModal.StartStudents);

  const [Values, setValues] = useState<ValuesType>({
    TipoPrueba: ShowModal?.TypeTest,
    CompetenciasGenericas: [],
    CompetenciasEspecificas: [],
    Programa: ShowModal?.Programa || null,
    IdSubSede: ValuesInfo.IdSubSede || "",
    SemestreAcademico: ShowModal?.SemestreAcademico || "",
    MaxSemestre: new Date(
      `${date.getFullYear()}-${ShowModal.MaxSemestre}-${lastDay}`
    ),

    MinStrudent: new Date(
      `${date.getFullYear()}-${ShowModal.StartStudents}-01`
    ),
  });

  const [SelectCompetenciasEspecificas, setSelectCompetenciasEspecificas] =
    useState([] as Competencia[]);
  const [Data, setData] = useState({
    IdSubSede: localStorage.getItem("IdSubSede") || "",
  } as {
    Especifica: Competencia[];
    General: Competencia[];
    Docentes: Docente[];
    Semestre: [];
    IdSubSede: string;
  });

  const [startDateDocentes, setStartDateDocentes] = useState(new Date());

  const [endDateDocentes, setEndDateDocentes] = useState(new Date());

  const [StartDateAprobacion, setStartDateAprobacion] = useState(new Date());

  const [EndDateAprobacion, setEndDateAprobacion] = useState(new Date());

  const [startDateEstudiantes, setStartDateEstudiantes] = useState(
    Values.MinStrudent
  );

  const [endDateEstudiantes, setEndDateEstudiantes] = useState(
    Values.MinStrudent
  );

  const [Menu, setMenu] = useState({
    Docentes: true,
    Aprobacion: false,
    Estudiantes: false,
    Competencias: false,
  });

  // const handerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   try {
  //     e.preventDefault();

  //     if (Values?.CompetenciasGenericas?.length < Data?.General?.length) {
  //       alert("Faltan competencias generales por llenar");
  //       return;
  //     }

  //     if (ShowModal?.TypeTest === "SS" && !Values.SemestreId) {
  //       alert("Falta seleccionar el Semestre Lectivo");
  //       return;
  //     }
  //     const sentDataRes = await fetch(
  //       "/api/Configuracion/ParametrosPruebas/AddPruebas",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           Fechas: {
  //             Docentes: {
  //               Inicio: startDateDocentes,
  //               Fin: endDateDocentes,
  //             },
  //             Estudiantes: {
  //               Inicio: startDateEstudiantes,
  //               Fin: endDateEstudiantes,
  //             },
  //           },
  //           Values,
  //         }),
  //       }
  //     ).then((res) => res.json());

  //     const response = await axios.post(
  //       "/api/Configuracion/ParametrosPruebas/GetPruebas",
  //       {
  //         programa: ValuesInfo?.Programa,
  //         tipo: ValuesInfo?.TipoPrueba,
  //       }
  //     );

  //     setPruebas(response?.data?.pruebas || []);

  //     setShowModal((prev: any) => ({ ...prev, Visible: false }));

  //     alert(sentDataRes?.body);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error al guardar");
  //   }
  // };

  // const hanlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...Values, [e.target.name]: e.target.value.toUpperCase() });
  // };

  // const resetInput = () => {
  //   setSearchInput("");
  // };
  return (
    <div className="bg-[#000236]/100 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-5xl">
        <div className=" overflow-auto  max-h-screen  py-4 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <section className="text-center text-lg tracking-normal leading-tight mb-4 bg-[#151A8B] w-full text-white p-4 rounded-lg font-bold flex items-center justify-between">
            <h1>Asignación de fechas y Docentes para las Competencias</h1>
            <button
              onClick={() => {
                setShowModal((prev: any) => ({ ...prev, Visible: false }));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </section>

          <div style={{ borderBottom: "2px solid #eaeaea" }}>
            <ul className="flex cursor-pointer justify-center">
              <li
                onClick={() => {
                  setMenu({
                    Docentes: true,
                    Aprobacion: false,
                    Estudiantes: false,
                    Competencias: false,
                  });
                }}
                className={`py-2 px-6 rounded-t-lg ${
                  Menu.Docentes ? " bg-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                Docentes
              </li>
              <li
                onClick={() => {
                  setMenu({
                    Docentes: false,
                    Aprobacion: true,
                    Estudiantes: false,
                    Competencias: false,
                  });
                }}
                className={`py-2 px-6 rounded-t-lg ${
                  Menu.Aprobacion ? " bg-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                Aprobación
              </li>
              <li
                onClick={() => {
                  setMenu({
                    Docentes: false,
                    Aprobacion: false,
                    Estudiantes: true,
                    Competencias: false,
                  });
                }}
                className={`py-2 px-6 rounded-t-lg ${
                  Menu.Estudiantes ? " bg-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                Estudiantes
              </li>
              <li
                onClick={() => {
                  setMenu({
                    Docentes: false,
                    Aprobacion: false,
                    Estudiantes: false,
                    Competencias: true,
                  });
                }}
                className={`py-2 px-6 rounded-t-lg ${
                  Menu.Competencias ? " bg-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                Competencias
              </li>
            </ul>
          </div>

          <div>
            {Menu?.Docentes && (
              <Docentes
                ShowModal={ShowModal}
                setStartDateDocentes={setStartDateDocentes}
                setEndDateDocentes={setEndDateDocentes}
                startDateDocentes={startDateDocentes}
                endDateDocentes={endDateDocentes}
                setMenu={setMenu}
                setStartDateAprobacion={setStartDateAprobacion}
                setEndDateAprobacion={setEndDateAprobacion}
              />
            )}
            {Menu?.Aprobacion && (
              <Aprobacion
                ShowModal={ShowModal}
                setMenu={setMenu}
                endDateDocentes={endDateDocentes}
                setStartDateAprobacion={setStartDateAprobacion}
                setEndDateAprobacion={setEndDateAprobacion}
                StartDateAprobacion={StartDateAprobacion}
                EndDateAprobacion={EndDateAprobacion}
                setStartDateEstudiantes={setStartDateEstudiantes}
                setEndDateEstudiantes={setEndDateEstudiantes}
              />
            )}
            {Menu?.Estudiantes && (
              <Estudiantes
                ShowModal={ShowModal}
                setMenu={setMenu}
                startDateEstudiantes={startDateEstudiantes}
                endDateEstudiantes={endDateEstudiantes}
                setStartDateEstudiantes={setStartDateEstudiantes}
                setEndDateEstudiantes={setEndDateEstudiantes}
                EndDateAprobacion={EndDateAprobacion}
              />
            )}
            {Menu?.Competencias && (
              <Competencias ShowModal={ShowModal} setMenu={setMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
