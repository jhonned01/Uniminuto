"use client";
import React from "react";
import EncabezadoPdf from "./EncabezadoPdf";
import ResultadoContent2 from "./ResultadoContent2";
import Resultados from "./Resultados";
import ResultadosContent from "./ResultadosContent";
import Tabla1PdfF from "./Tabla1PdfF";
import Tabla1Pdfh from "./Tabla1Pdfh";
import Tabla2PdfF from "./Tabla2PdfF";
import Tabla2Pdfh from "./Tabla2Pdfh";

const BodyComponent = () => {
  return (
    <>
      <EncabezadoPdf />
      <Tabla1Pdfh />
      <Tabla1PdfF />
      <Tabla2Pdfh />
      <Tabla2PdfF />
      {/* <Resultados />
      <ResultadosContent />
      <ResultadoContent2 /> */}
    </>
  );
};

export default BodyComponent;
