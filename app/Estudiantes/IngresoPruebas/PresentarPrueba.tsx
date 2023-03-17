"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Programa, VisibilidadModal } from "../../../typings";
import MenuPruebas from "./MenuPruebas";
import PreguntasTipo1 from "./PreguntasTipo1";

type Props = {
  // type props useState
  setShowModal: React.Dispatch<React.SetStateAction<VisibilidadModal>>;
  DataSelected: React.Dispatch<React.SetStateAction<{}>>;
};

const PresentarPrueba = ({ setShowModal, DataSelected }: Props) => {
  const [Preguntas, setPreguntas] = useState([] as any[]);
  const [PreguntasResolver, setPreguntasResolver] = useState([] as any[]);
  const [PreguntaShow, setPreguntaShow] = useState({} as any);
  const [ResponseStudent, setResponseStudent] = useState(
    {} as {
      Pregunta: number;
      IdEstudiante: number;
      Prueba: number;
      Respuesta: string;
      NombreCompetencia: string;
    }
  );

  console.log("PreguntaShow---PreguntaShw", PreguntaShow);

  const GetInfo = async () => {
    try {
      const res = await axios(
        "/api/Pruebas/PresentarPrueba/GetPruebaPresentar",
        {
          params: {
            ...DataSelected,
          },
        }
      );
      console.log("DataSelected", DataSelected);

      setPreguntas(res?.data?.Preguntas || []);
    } catch (error) {
      console.log(error);
      alert("Error al cargar la información");
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  const handerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/Pruebas/PresentarPrueba/SaveRespuesta",
        ResponseStudent
      );

      const NewArray: any = PreguntasResolver.filter(
        (preguntas) => preguntas.PreguntaId !== ResponseStudent.Pregunta
      );

      setPreguntasResolver(NewArray);

      if (NewArray.length == 0) {
        alert("Competencia finalizada");
        const newCompetencias = Preguntas.filter(
          (competencia) =>
            competencia.CompetenciaNombre != ResponseStudent.NombreCompetencia
        );
        setPreguntas(newCompetencias);
      }

      setPreguntaShow(NewArray[0] || {});

      // limpiar formlario

      setResponseStudent({} as any);

      alert("Respuesta guardada correctamente");
    } catch (error) {
      console.log(error);
      alert("Error al guardar la información");
    }
  };

  return (
    <>
      <div className="bg-[#000236]/100 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
        <div className="grid sm:grid-cols-2  md:grid-cols-10 md:gap-4 h-screen">
          <div className="text-white md:col-span-3 ">
            <MenuPruebas
              Preguntas={Preguntas}
              setPreguntasResolver={setPreguntasResolver}
              setPreguntaShow={setPreguntaShow}
            />
          </div>
          <div className="md:col-span-7">
            <div className=" mx-auto  w-full ">
              <div className=" py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <h1 className="text-center text-lg tracking-normal leading-tight mb-4 bg-[#151A8B] w-full text-white p-4 rounded-lg font-bold ">
                  Prueba de Conocimiento
                </h1>
                {PreguntaShow?.TipoPregunta == 1 && (
                  <PreguntasTipo1
                    pregunta={PreguntaShow}
                    setResponseStudent={setResponseStudent}
                  />
                )}
                {PreguntaShow?.TipoPregunta == 2 && (
                  <PreguntasTipo1
                    pregunta={PreguntaShow}
                    setResponseStudent={setResponseStudent}
                  />
                )}
                {/* <FroalaEditorView model={PreguntaShow?.pregunta} /> */}

                <form onSubmit={handerSubmit}>
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
                        setShowModal({
                          AddVisible: false,
                        });
                      }}
                    >
                      Cerrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="text-white md:col-span-2">
            <Puntaje
              PreguntasResolver={PreguntasResolver}
              setPreguntaShow={setPreguntaShow}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PresentarPrueba;
