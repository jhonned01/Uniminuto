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
    margin: 107,
  },
});

const RsultadosContent = () => (
  <Document>
    <Page>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          {/* <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>ID</Text>
          </View> */}
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>Puntaje Global</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>Puntaje por Modulo</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.headerText}>percentil </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default RsultadosContent;
