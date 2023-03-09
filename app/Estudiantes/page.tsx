import React from "react";
import BodyComponent from "./BodyComponent";

const Estudiantes = ({ searchParams }: any) => {
  console.log("searchParams--", searchParams);

  return (
    <>
      <BodyComponent InfoUser={searchParams} />
    </>
  );
};

export default Estudiantes;
