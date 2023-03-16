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
  },
});

const data = [
  {
    mod: "1 User",
    desemp: "2019-02-20 - 2020-02-19",
    carct: "5€",
  },
  {
    mod: "2 User",
    desemp: "2020-01-01 - 2021-01-01",
    carct: "10€",
  },
];

const Tabla2 = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Product</Text>
        </View> */}
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Módulos Competencias</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Nivel de desempeño</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Caracteristicas por Nivel</Text>
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
            <Text style={styles.tableCell}>{item.desemp}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.carct}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tabla2;
