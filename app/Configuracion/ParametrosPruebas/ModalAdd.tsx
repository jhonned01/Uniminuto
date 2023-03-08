"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import Select from "react-select";
import { Competencia, Docente } from "../../../typings";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";

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

  const [startDateEstudiantes, setStartDateEstudiantes] = useState(
    Values.MinStrudent
  );

  const [endDateEstudiantes, setEndDateEstudiantes] = useState(
    Values.MinStrudent
  );

  const selectionRangeDocentes = {
    startDate: startDateDocentes,
    endDate: endDateDocentes,
    key: "selection",
  };
  const selectionRangeEstudiantes = {
    startDate: startDateEstudiantes,
    endDate: endDateEstudiantes,
    key: "selection",
  };

  const handerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (Values?.CompetenciasGenericas?.length < Data?.General?.length) {
        alert("Faltan competencias generales por llenar");
        return;
      }

      // if (Values?.InicioPrueba > Values?.FinPrueba) {
      //   alert(
      //     "La fecha de finalización indicada no puede ser menor a la fecha de Inicio"
      //   );
      //   return;
      // }

      if (ShowModal?.TypeTest === "SS" && !Values.SemestreId) {
        alert("Falta seleccionar el Semestre Lectivo");
        return;
      }
      const sentDataRes = await fetch(
        "/api/Configuracion/ParametrosPruebas/AddPruebas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Fechas: {
              Docentes: {
                Inicio: startDateDocentes,
                Fin: endDateDocentes,
              },
              Estudiantes: {
                Inicio: startDateEstudiantes,
                Fin: endDateEstudiantes,
              },
            },
            Values,
          }),
        }
      ).then((res) => res.json());

      const response = await axios.post(
        "/api/Configuracion/ParametrosPruebas/GetPruebas",
        {
          programa: ValuesInfo?.Programa,
          tipo: ValuesInfo?.TipoPrueba,
        }
      );

      setPruebas(response?.data?.pruebas || []);

      setShowModal((prev: any) => ({ ...prev, Visible: false }));

      alert(sentDataRes?.body);
    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  };

  const hanlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...Values, [e.target.name]: e.target.value.toUpperCase() });
  };

  const getCompetencias = async () => {
    try {
      const response = await fetch(
        `/api/Configuracion/Competencias/GetCompetencias?SubSede=${ValuesInfo.IdSubSede}`
      ).then((res) => res.json());

      const ResDocentes = await fetch(
        `/api/Configuracion/Docentes/GetDocentes?SubSede=${ValuesInfo.IdSubSede}`
      ).then((res) => res.json());

      // const Fechas = await fetch(
      //   `/api/Configuracion/ParametrosPruebas/GetFechasProgramaSemestre?SubSede=${ValuesInfo.IdSubSede}&Programa=${Values.Programa}&Semestre=${Values.SemestreAcademico}`
      // ).then((res) => res.json());

      // console.log("Fechas", Fechas);

      const TipoCompetencias = response?.competencia?.reduce(
        (acc: any, el: Competencia) => {
          const key = el?.TipoCompetencia;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(el);
          return acc;
        },
        {}
      );

      setData({
        ...Data,
        Especifica: TipoCompetencias?.E,
        General: TipoCompetencias?.G,
        Docentes: ResDocentes?.docentes,
        // Semestre: ResSemestre?.semestreAcademico,
      });
    } catch (error) {
      console.log(error);
      alert("Error al cargar las competencias");
    }
  };

  useEffect(() => {
    getCompetencias();
  }, []);

  const handleSelectDocentes = (ranges: any) => {
    setStartDateDocentes(ranges.selection.startDate);
    setEndDateDocentes(ranges.selection.endDate);
  };

  const handleSelectEstudiantes = (ranges: any) => {
    setStartDateEstudiantes(ranges.selection.startDate);
    setEndDateEstudiantes(ranges.selection.endDate);
  };
  // const resetInput = () => {
  //   setSearchInput("");
  // };
  return (
    <div className="bg-[#000236]/100 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-5xl">
        <div className="relative overflow-auto  max-h-screen  py-4 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-center text-lg tracking-normal leading-tight mb-4 bg-[#151A8B] w-full text-white p-4 rounded-lg font-bold ">
            Asignación de fechas y Docentes para las Competencias
          </h1>

          <form className=" " onSubmit={handerSubmit}>
            {ShowModal?.TypeTest === "SP" ? (
              <>
                <div className="grid sm:grid-cols-2 g-2 place-items-center center">
                  <div>
                    <label
                      htmlFor="InicioPrueba"
                      className="mb-3 block text-base font-medium text-gray-800"
                    >
                      Rango Fechas Profesores{" "}
                      <span className="text-red-900">(*)</span>
                    </label>
                    <DateRange
                      ranges={[selectionRangeDocentes]}
                      minDate={new Date()}
                      rangeColors={["#3b82f6"]}
                      onChange={handleSelectDocentes}
                      locale={es}
                      maxDate={Values.MaxSemestre}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="InicioPrueba"
                      className="mb-3 block text-base font-medium text-gray-800"
                    >
                      Rango Fechas Estudiantes{" "}
                      <span className="text-red-900">(*)</span>
                    </label>
                    <DateRange
                      ranges={[selectionRangeEstudiantes]}
                      minDate={Values.MinStrudent}
                      rangeColors={["#3b82f6"]}
                      onChange={handleSelectEstudiantes}
                      locale={es}
                      maxDate={Values.MaxSemestre}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 ">
                  <div className="border-2 border-[#151a8b]">
                    <h2 className="text-2xl font-bold capitalize text-center">
                      Competencias Genéricas
                    </h2>

                    <ul className="max-h-[15rem] overflow-auto">
                      {Data?.General?.map((el) => (
                        <li key={el.Id} className="p-2 rounded-lg ">
                          <div className="flex align-middle flex-col justify-between">
                            <div className="p-2">
                              <p className="text-lg text-black">{el.Nombre} </p>
                            </div>

                            <Select
                              options={Data?.Docentes}
                              getOptionLabel={(item) =>
                                `${item?.Nombre} ${item?.Apellidos}`
                              }
                              getOptionValue={(item) => item.Id}
                              placeholder="Seleccione un profesor"
                              onChange={(docente) => {
                                setValues((prev: any) => ({
                                  ...prev,
                                  CompetenciasGenericas: [
                                    ...prev.CompetenciasGenericas,
                                    {
                                      IdAsignatura: el?.Id,
                                      Abreviatura: el?.Abreviatura,
                                      DocenteDocumento: docente?.Documento,
                                      DocenteId: docente?.Id,
                                      NombreAsignatura: el?.Nombre,
                                      TipoCompetencia: el?.TipoCompetencia,
                                    },
                                  ],
                                }));
                              }}
                            />
                          </div>
                          <hr className="mt-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2  max-h-[15rem] overflow-auto  border-[#151a8b]">
                    <h2 className="text-2xl font-bold capitalize text-center ">
                      Competencias Específicas
                    </h2>
                    <Select
                      options={Data?.Especifica || []}
                      getOptionLabel={(item) => item?.Nombre}
                      getOptionValue={(item) => item?.Id}
                      placeholder="Seleccione una competencia"
                      closeMenuOnSelect={false}
                      onChange={(item: any) => {
                        setSelectCompetenciasEspecificas((prev) => [
                          ...prev,
                          item,
                        ]);
                        setData({
                          ...Data,
                          Especifica: Data?.Especifica?.filter(
                            (el) => el.Id !== item.Id
                          ),
                        });
                      }}
                      className=" px-2"
                    />

                    <ul className="">
                      {SelectCompetenciasEspecificas?.map((item) => (
                        <li key={item.Id} className="p-2 rounded-lg">
                          <div className="flex align-middle flex-col justify-between">
                            <div className="p-2 flex justify-between items-center">
                              <p className="text-lg text-black">
                                {item.Nombre}
                              </p>
                              <span
                                className="cursor-pointer text-red-900"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectCompetenciasEspecificas((prev) =>
                                    prev.filter((el) => el.Id !== item.Id)
                                  );
                                  setData({
                                    ...Data,
                                    Especifica: [...Data?.Especifica, item],
                                  });
                                  setValues((prev: any) => ({
                                    ...prev,
                                    CompetenciasEspecificas:
                                      prev.CompetenciasEspecificas.filter(
                                        (el: any) => el.IdAsignatura !== item.Id
                                      ),
                                  }));
                                }}
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
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </div>

                            <Select
                              options={Data?.Docentes}
                              getOptionLabel={(item) =>
                                `${item.Nombre} ${item.Apellidos}`
                              }
                              getOptionValue={(item) => item.Id}
                              placeholder="Seleccione un docente"
                              onChange={(docente) => {
                                setValues((prev: any) => ({
                                  ...prev,
                                  CompetenciasEspecificas: [
                                    ...prev.CompetenciasEspecificas,
                                    {
                                      IdAsignatura: item?.Id,
                                      Abreviatura: item?.Abreviatura,
                                      DocenteDocumento: docente?.Documento,
                                      DocenteId: docente?.Id,
                                      NombreAsignatura: item?.Nombre,
                                      TipoCompetencia: item?.TipoCompetencia,
                                    },
                                  ],
                                }));
                              }}
                            />
                          </div>
                          <hr className="mt-1" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-2 ">
                  <div className="mb-2">
                    <label
                      htmlFor="InicioPrueba"
                      className="mb-3 block text-base font-medium text-gray-800"
                    >
                      Inicio Prueba <span className="text-red-900">(*)</span>
                    </label>
                    <input
                      autoComplete="off"
                      autoFocus
                      type="datetime-local"
                      name="InicioPrueba"
                      id="InicioPrueba"
                      required
                      onChange={hanlerChange}
                      placeholder="Ingrese Nombre"
                      className="InputStyle"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="FinPrueba"
                      className="mb-3 block text-base font-medium text-gray-800"
                    >
                      Fin Prueba <span className="text-red-900">(*)</span>
                    </label>
                    <input
                      autoComplete="off"
                      type="datetime-local"
                      name="FinPrueba"
                      id="FinPrueba"
                      required
                      onChange={hanlerChange}
                      placeholder="Ingrese FinPrueba"
                      className="InputStyle"
                    />
                  </div>
                  <Select
                    options={Data?.Semestre || []}
                    getOptionLabel={(item: any) => item.Nombre}
                    getOptionValue={(item: any) => item.Id}
                    className="col-span-2"
                    placeholder="Seleccione un semestre"
                    onChange={(semestre) => {
                      setValues((prev: any) => ({
                        ...prev,
                        SemestreId: semestre?.Id,
                      }));
                    }}
                  />

                  <div className="border-2  border-[#151a8b]">
                    <h2 className="text-2xl font-bold capitalize text-center">
                      Competencias Genéricas
                    </h2>

                    <ul className="max-h-[16.5rem] overflow-auto scrollbar-hide">
                      {Data?.General?.map((el) => (
                        <li key={el.Id} className="p-2 rounded-lg">
                          <div className="flex align-middle flex-col justify-between">
                            <div className="p-2">
                              <p className="text-lg text-black">{el.Nombre} </p>
                            </div>

                            <Select
                              options={Data?.Docentes}
                              getOptionLabel={(item) =>
                                `${item.Nombre} ${item.Apellidos}`
                              }
                              getOptionValue={(item) => item.Id}
                              placeholder="Seleccione un docente"
                              onChange={(docente) => {
                                setValues((prev: any) => ({
                                  ...prev,
                                  CompetenciasGenericas: [
                                    ...prev.CompetenciasGenericas,
                                    {
                                      IdAsignatura: el?.Id,
                                      Abreviatura: el?.Abreviatura,
                                      DocenteDocumento: docente?.Documento,
                                      DocenteId: docente?.Id,
                                      NombreAsignatura: el?.Nombre,
                                      TipoCompetencia: el?.TipoCompetencia,
                                    },
                                  ],
                                }));
                              }}
                            />
                          </div>
                          <hr className="mt-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2  border-[#151a8b]">
                    <h2 className="text-2xl font-bold capitalize text-center ">
                      Competencias Específicas
                    </h2>
                    <Select
                      options={Data.Especifica || []}
                      getOptionLabel={(item) => item.Nombre}
                      getOptionValue={(item) => item.Id}
                      placeholder="Seleccione una competencia"
                      closeMenuOnSelect={false}
                      onChange={(item: any) => {
                        setSelectCompetenciasEspecificas((prev) => [
                          ...prev,
                          item,
                        ]);
                        setData({
                          ...Data,
                          Especifica: Data?.Especifica?.filter(
                            (el) => el.Id !== item.Id
                          ),
                        });
                      }}
                      className="w-full px-2"
                    />

                    <ul className="max-h-[16.5rem] overflow-auto scrollbar-hide">
                      {SelectCompetenciasEspecificas?.map((item) => (
                        <li key={item.Id} className="p-2 rounded-lg">
                          <div className="flex align-middle flex-col justify-between">
                            <div className="p-2 flex justify-between items-center">
                              <p className="text-lg text-black">
                                {item.Nombre}
                              </p>
                              <span
                                className="cursor-pointer text-red-900"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectCompetenciasEspecificas((prev) =>
                                    prev.filter((el) => el.Id !== item.Id)
                                  );
                                  setData({
                                    ...Data,
                                    Especifica: [...Data?.Especifica, item],
                                  });
                                  setValues((prev: any) => ({
                                    ...prev,
                                    CompetenciasEspecificas:
                                      prev.CompetenciasEspecificas.filter(
                                        (el: any) => el.IdAsignatura !== item.Id
                                      ),
                                  }));
                                }}
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
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </div>

                            <Select
                              options={Data?.Docentes}
                              getOptionLabel={(item) =>
                                `${item.Nombre} ${item.Apellidos}`
                              }
                              getOptionValue={(item) => item.Id}
                              placeholder="Seleccione un Docente"
                              onChange={(docente) => {
                                setValues((prev: any) => ({
                                  ...prev,
                                  CompetenciasEspecificas: [
                                    ...prev.CompetenciasEspecificas,
                                    {
                                      IdAsignatura: item?.Id,
                                      Abreviatura: item?.Abreviatura,
                                      DocenteDocumento: docente?.Documento,
                                      DocenteId: docente?.Id,
                                      NombreAsignatura: item?.Nombre,
                                      TipoCompetencia: item?.TipoCompetencia,
                                    },
                                  ],
                                }));
                              }}
                            />
                          </div>
                          <hr className="mt-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-around mt-3 gap-2">
              <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                Guardar
              </button>
              <button
                className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal((prev: any) => ({ ...prev, Visible: false }));
                }}
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
