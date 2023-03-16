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
    porcent: "De 200 puntos posibles, su puntaje es",
  },
  {
    mod: "1 User",
    porcent: "2019-02-20 - 2020-02-19",
    percent: "5€",
  },
  {
    mod: "2 User",
    porcent: "2020-01-01 - 2021-01-01",
    percent: "10€",
  },
  {
    mod: "3 User",
    porcent: "2021-03-01 - 2022-03-01",
    percent: "15€",
  },
  {
    mod: "4 User",
    porcent: "2021-03-01 - 2022-03-01",
    percent: "20€",
  },
  {
    mod: "5 User",
    porcent: "2021-03-01 - 2022-03-01",
    percent: "25€",
  },
];

const Tabla1 = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Product</Text>
        </View> */}
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Módulos</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Porcentaje por Módulo</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>¿En que percentil se encuentra?</Text>
        </View>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {/* <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.product}</Text>
          </View> */}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.mod}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.porcent}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.percent}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tabla1;
