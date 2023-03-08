import { Programa } from "../../../typings";
import BodyComponent from "./BodyComponent";

const Programas = async ({ searchParams }: any) => {
  const data: any = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/Programas/GetProgramas?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const programas: Programa[] = data.programas;

  return (
    <>
      <BodyComponent programas={programas} />
    </>
  );
};

export default Programas;
