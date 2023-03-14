"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    display: "table" as any,
    width: 100,
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

  // bodyText: {
  //   marginTop: 5,
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   margin: 62,
  // },

  bodyText2: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 92,
  },

  bodyText3: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 139,
  },

  bodyText4: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 167.5,
  },
});

const data = [
  {
    id: 1,
    name: "Gob1",
    porcent: "10%",
    Values: "2",
  },
  {
    id: 2,
    name: "Gob2",
    porcent: "20%",
    Values: "3",
  },
  {
    id: 3,
    name: "Gob3",
    porcent: "30%",
    Values: "4",
  },

  {
    id: 4,
    name: "Gob4",
    porcent: "40%",
    Values: "5",
  },

  {
    id: 5,
    name: "Gob5",
    porcent: "50%",
    Values: "6",
  },
];

const Tabla1PdfF = () => (
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
              <Text style={styles.bodyText2}>{item.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.bodyText3}>{item.porcent}</Text>
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

export default Tabla1PdfF;
