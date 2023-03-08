import React from "react";
import { COA } from "../../../typings";
import Title from "../../Title";
import BodyComponent from "./BodyComponent";

const BancoPreguntas = async () => {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Pruebas/BancoPreguntas/GetCoa`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const Coa: COA[] = data?.Coa;

  return (
    <>
      <Title title="Banco de Preguntas" />
      <BodyComponent Coa={Coa} />
    </>
  );
};

export default BancoPreguntas;
