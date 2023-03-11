import { Competencia } from "@/typings";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  ShowModal: any;
  setMenu: React.Dispatch<React.SetStateAction<any>>;
};

const Competencias = ({ ShowModal, setMenu }: Props) => {
  const [Values, setValues] = React.useState({});
  const [Data, setData] = React.useState({} as any);
  const searchParams = useSearchParams();

  console.log("Data", Data);

  const getCompetencias = async () => {
    try {
      const SubSede = searchParams.get("SubSede");

      const response = await fetch(
        `/api/Configuracion/Competencias/GetCompetencias?SubSede=${SubSede}`
      ).then((res) => res.json());

      const ResDocentes = await fetch(
        `/api/Configuracion/Docentes/GetDocentes?SubSede=${SubSede}`
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

  return (
    <div>
      {" "}
      <section className="flex justify-center">
        {ShowModal?.TypeTest === "SP" && <div> hpña</div>}
      </section>{" "}
      <div className="flex justify-around mt-3 gap-2">
        <button className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
          Guardar Prueba
        </button>
      </div>
    </div>
  );
};

export default Competencias;
