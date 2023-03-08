import React from "react";
import Title from "../../Title";
import BodyComponent from "./BodyComponent";

async function GetRectorias() {
  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/SedeRectoria/GetRectorias`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return data;
}

async function GetSubSedes() {
  const dataSedesSubSedes = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/SubSedes/GetSedesSubSedes`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return dataSedesSubSedes;
}

const SubSedes = async () => {
  const rectoriasData = GetRectorias();
  const subSedesData = GetSubSedes();

  const [rectorias, subSedes] = await Promise.all([
    rectoriasData,
    subSedesData,
  ]);

  return (
    <>
      <Title title="Configuración Centro de operaciones académicos (COA)" />
      <BodyComponent rectorias={rectorias} subSedes={subSedes} />
    </>
  );
};

export default SubSedes;
