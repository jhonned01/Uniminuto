import { Competencia } from "../../../typings";
import BodyComponent from "./BodyComponent";

const CompetenciasPage = async ({ searchParams }: any) => {
  let competencias: Competencia[] = [];

  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/Competencias/GetCompetencias?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  competencias = data.competencia || [];

  return (
    <>
      <BodyComponent data={competencias} />
    </>
  );
};

export default CompetenciasPage;
