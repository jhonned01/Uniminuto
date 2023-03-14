"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const EncabezadoPdf = () => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "Arial",
    },

    page: {
      flexDirection: "row",
      backgroundColor: "tomato",
      borderColor: "black",
      borderWidth: 1,
      marginLeft: 100,
    },

    page0: {
      flexDirection: "row",
      backgroundColor: "transparent",
      borderColor: "black",
      borderWidth: 1,
      marginLeft: 100,
    },

    section: {
      margin: 150,
      padding: 10,
      color: "Black",
      textAlign: "center",
      width: 200,
    },

    page1: {
      flexDirection: "row",
      backgroundColor: "tomato",
      borderColor: "black",
      borderWidth: 1,
      marginLeft: 100,
    },

    container1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    section1: {
      margin: 220,
      padding: 189,
      color: "Black",
      textAlign: "center",
      width: 200,
    },
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
        </Page>
        <Page size="A4" style={styles.page0}>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>

      <Text style={styles.title}>RESULTADO DE LOS MODULOS </Text>
      <Text style={styles.title}>
        Tenga en cuenta que el puntaje maximo es de 300 pts
      </Text>
      <Document>
        <Page size="A4" style={styles.page1}>
          <View style={styles.container1}>
            <View style={styles.section1}>
              <Text>Section #3</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default EncabezadoPdf;
