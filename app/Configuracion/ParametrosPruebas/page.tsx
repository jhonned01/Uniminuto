import { Programa } from "../../../typings";
import Title from "../../Title";
import BodyComponent from "./BodyComponent";

const ParametrosPruebas = async ({ searchParams }: any) => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/GradosGrupos/GetInfoModal?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const Programas: Programa[] = data?.programa;

  return (
    <>
      <Title title="Parametrización de pruebas" />

      <BodyComponent data={Programas} />
    </>
  );
};

export default ParametrosPruebas;
