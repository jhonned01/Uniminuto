"use client";
import React from "react";
import ReactPDF, {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Define los datos para el gráfico
const data = [
  { month: "Enero", sales: 1000 },
  { month: "Febrero", sales: 1500 },
  { month: "Marzo", sales: 2000 },
  { month: "Abril", sales: 2500 },
  { month: "Mayo", sales: 3000 },
  { month: "Junio", sales: 3500 },
  { month: "Julio", sales: 2800 },
];

// Define los estilos para el gráfico y el plano cartesiano
const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 20,
    width: "80%",
    height: 200,
    flexDirection: "row",
    margin: "10%",
  },
  barContainer: {
    flexGrow: 1,
    margin: 1,
    backgroundColor: "#007bff",
  },
  barLabel: {
    marginTop: 5,
    textAlign: "center",
    color: "#fff",
  },
  axisContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  yAxisLabel: {
    width: 30,
    height: "100%",
    textAlign: "right",
    color: "#555",
  },
  xAxisLabel: {
    width: "100%",
    textAlign: "center",
    color: "#555",
    paddingTop: 10,
  },
  axisLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#555",
  },
});

// Define el componente del gráfico
const Grafica = () => {
  // Obtiene el máximo de ventas para calcular la altura de las barras
  const maxSales = Math.max(...data.map((item) => item.sales));

  return (
    <View style={styles.chartContainer}>
      {data.map((item) => (
        <View key={item.month} style={styles.barContainer}>
          <View style={{ height: (item.sales / maxSales) * 200 }} />
          <Text style={styles.barLabel}>{item.month}</Text>
        </View>
      ))}
    </View>
  );
};

export default Grafica;
