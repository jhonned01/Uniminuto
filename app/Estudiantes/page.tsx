import React from "react";
import BodyComponent from "./BodyComponent";

const Estudiantes = async ({ searchParams }: any) => {
  console.log("searchParams", searchParams);

  const data = await fetch(
    `${
      process.env.URL || "http://localhost:3000"
    }/api/Configuracion/CargaMasiva/GetStudents?SubSede=${
      searchParams?.SubSede
    }`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const { estudiantes } = data;
  return (
    <>
      <BodyComponent data={estudiantes} InfoUser={searchParams} />
    </>
  );
};

export default Estudiantes;
