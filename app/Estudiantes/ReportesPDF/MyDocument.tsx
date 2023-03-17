"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Canvas,
} from "@react-pdf/renderer";
import Tabla1 from "./Tabla1";
import Tabla2 from "./Tabla2";
import Encabezado from "./Encabezado";
import Grafica from "./Grafica";
import BarChar from "./reporte/BarChart";

// Create styles
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
    display: "flex",
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.marginDocument}>
        <Encabezado />
        <Text style={styles.title}>Resultados por Módulos</Text>
        <Text style={styles.subtitle}>Modulo Competencias Genéricas</Text>
        <Tabla1 />
        <Tabla2 />
        {/* <Grafica /> */}
        <BarChar />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
