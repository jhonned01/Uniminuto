"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    display: "table" as any,
    width: "auto",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 100,
  },

  row: {
    flexDirection: "row",
  },

  cell: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 5,
  },

  //   bodyText: {
  //     marginTop: 5,
  //     fontSize: 12,
  //     fontWeight: "bold",
  //     margin: 62,
  //   },

  bodyText2: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 105,
  },

  bodyText3: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 112.5,
  },

  bodyText4: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 182,
  },
});

const data = [
  {
    id: 1,
    Competencia: "Gob1",
    Nivel: "10%",
    Values: "2",
  },
  {
    id: 2,
    Competencia: "Gob2",
    Nivel: "20%",
    Values: "3",
  },
];

const Tabla2PdfF = () => (
  <Document>
    <Page>
      {data.map((item) => (
        <View style={styles.table} key={item.id}>
          {/* <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.bodyText}>{item.id}</Text>
            </View>
          </View> */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.bodyText2}>{item.Competencia}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.bodyText3}>{item.Nivel}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.bodyText4}>{item.Values}</Text>
            </View>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default Tabla2PdfF;
