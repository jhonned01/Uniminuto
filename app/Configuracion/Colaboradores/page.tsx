import { Administrativo } from "../../../typings";
import BodyComponent from "./BodyComponent";

const Colaboradores = async ({ searchParams }: any) => {
  const data: any = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/Administrativos/GetAdministrativos?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const administrativos: Administrativo[] = data.administrativos;
  return (
    <>
      <BodyComponent data={administrativos} />
    </>
  );
};

export default Colaboradores;
