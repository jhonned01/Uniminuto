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
    nombre: "Brahian Andres Orozco Salguero",
    document: "1005813582",
    regist: " 31/03/2023",
  },
];

const DatosUser = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Product</Text>
          </View> */}
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>NOMBRE Y APELLIDO</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>DOCUMENTO DE IDENTIDAD</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>FECHA DE LA PRUEBA</Text>
        </View>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {/* <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.product}</Text>
            </View> */}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.nombre}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.document}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.regist}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DatosUser;
