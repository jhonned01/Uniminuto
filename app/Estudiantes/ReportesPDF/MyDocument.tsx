"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    margin: "2%",
  },

  section: {
    margin: "4%",
    padding: "4%",
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Resultados por Módulos</Text>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
