import React from "react";
import BodyComponent from "./BodyComponent";

const Estudiantes = async ({ searchParams }: any) => {
  return (
    <>
      <BodyComponent InfoUser={searchParams} />
    </>
  );
};

export default Estudiantes;
