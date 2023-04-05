"use client";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  StyleSheet,
  Document,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  table: {
    display: "table" as any,
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: "1%",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    padding: "3%",
  },
});

const data = [
  {
    porcent: "De 300 puntos posibles, su puntaje es:",
  },
  {
    mod: "Comunicación Escrita",
    porcent: "0",
    percent: "0%",
  },
  {
    mod: "Razonamiento Cuantitativo",
    porcent: "150",
    percent: "25%",
  },
  {
    mod: "Lectura Crítica",
    porcent: "190",
    percent: "45%",
  },
  {
    mod: "Competencias Ciudadanas",
    porcent: "225",
    percent: "63%",
  },
  {
    mod: "Inglés",
    porcent: "225",
    percent: "80%",
  },
];

const Tabla1 = ({ InfoPdf }: any) => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Product</Text>
        </View> */}
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>MÓDULOS</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>PUNTAJE POR MÓDULO</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>% POR PERCENTIL</Text>
        </View>
      </View>
      {InfoPdf?.Competencias?.map((item: any, index: any) => (
        <View key={index} style={styles.tableRow}>
          {/* <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.product}</Text>
          </View> */}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.CompetenciaNombre}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.TotalPuntos} / 300</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {((item.TotalPuntos * 100) / 300).toFixed(2)}%
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tabla1;
