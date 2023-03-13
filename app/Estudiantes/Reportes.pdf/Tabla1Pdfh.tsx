"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    display: "table" as any,
    width: "auto",
    borderStyle: "solid",
    marginLeft: 100,
    backgroundColor: "tomato",
  },

  tableHeader: {
    margin: "auto",
    flexDirection: "row",
  },

  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    transform: "rotate(-90deg)", // agregamos esta propiedad para rotar el texto verticalmente
  },

  headerText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    margin: 87.8,
  },
});

const Tabla1Pdfh = () => (
  <Document>
    <Page>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          {/* <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>ID</Text>
          </View> */}
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>Módulos</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>Porcentaje por Módulos</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>
              ¿En que percentil se encuentra?
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Tabla1Pdfh;
