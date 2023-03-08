import { Docente } from "../../../typings";
import BodyComponent from "./BodyComponent";

const Profesores = async ({ searchParams }: any) => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/Docentes/GetDocentes?SubSede=${searchParams?.SubSede}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const docentes: Docente[] = data.docentes;

  return (
    <>
      <BodyComponent data={docentes} />
    </>
  );
};

export default Profesores;
