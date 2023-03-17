import Title from "@/app/Title";
import React from "react";
import BodyComponent from "./BodyComponent";

function page() {
  return (
    <>
      <div className="flex flex-col">
        <Title title="Reporte Resultados Prueba Saber para Administrativos" />
        <BodyComponent />
      </div>
    </>
  );
}

export default page;
