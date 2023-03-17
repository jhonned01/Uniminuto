"use client";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import {
  Page,
  Document,
  Image,
  View,
  StyleSheet,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";
import BarChart from "./BarChart";
import Tabla1 from "../Tabla1";
import Tabla2 from "../Tabla2";

const Reporte = () => {
  const [chartImage, setChartImage] = useState(null);
  console.log(chartImage, "chartImage");

  const chartRef: any = useRef();

  const saveChartAsImage = () => {
    const chartCanvas = chartRef.current.querySelector("canvas");

    return html2canvas(chartCanvas).then((canvas) => {
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/png");
      });
    });
  };

  const handleChartImage = () => {
    saveChartAsImage().then((blob: any) => {
      setChartImage(blob);
    });
  };
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#fff",
    },

    title: {
      fontSize: 24,
      margin: "2%",
      marginLeft: "30%",
    },

    subtitle: {
      fontSize: 16,
      margin: "0.5%",
      marginLeft: "32%",
    },

    marginDocument: {
      border: "2px solid black",
      height: "98vh",
      width: "98%",
      margin: "1vh",
      //   display: "flex",
    },
  });

  return (
    <Document>
      <Page>
        <h1>Mi reporte</h1>
        <p>Aquí está mi gráfico:</p>
        <BarChart />
        {chartImage && <Image src={URL.createObjectURL(chartImage)} />}
      </Page>
    </Document>
  );
};

export default Reporte;
