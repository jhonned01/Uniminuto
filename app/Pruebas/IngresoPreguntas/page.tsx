import { Programa } from "../../../typings";
import BodyComponent from "./BodyComponent";

const IngresoPreguntas = async ({ searchParams }: any) => {
  const { SubSede, IdRol, IdUser, IdPrueba } = searchParams;

  const PruebasRes = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Pruebas/GetPruebasUser?SubSede=${SubSede}&IdRol=${IdRol}&IdUser=${IdUser}&IdPrueba=${
      IdPrueba || ""
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const Programas: Programa[] = [];
  const Pruebas: [] = PruebasRes.pruebas;

  return (
    <>
      <BodyComponent Pruebas={Pruebas} urlInfo={searchParams} />
    </>
  );
};

export default IngresoPreguntas;
