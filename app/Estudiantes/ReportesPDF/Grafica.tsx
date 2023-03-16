// "use client";
// import React from "react";
// import ReactPDF, {
//   Document,
//   Page,
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from "@react-pdf/renderer";

// // Define los datos para el gráfico
// const data = [
//   { month: "Ene", sales: 10 },
//   { month: "Feb", sales: 15 },
//   { month: "Mar", sales: 20 },
//   { month: "Abr", sales: 25 },
//   { month: "May", sales: 30 },
//   { month: "Jun", sales: 35 },
//   { month: "Jul", sales: 40 },
// ];

// // Define los estilos para el gráfico y el plano cartesiano
// const styles = StyleSheet.create({
//   chartContainer: {
//     marginTop: 20,
//     width: "80%",
//     height: 200,
//     flexDirection: "row",
//     margin: "10%",
//   },
//   barContainer: {
//     flexGrow: 1,
//     margin: 1,
//     backgroundColor: "#007bff",
//   },
//   barLabel: {
//     marginTop: 5,
//     textAlign: "center",
//     color: "#fff",
//   },
//   axisContainer: {
//     width: "100%",
//     height: "100%",
//     position: "absolute",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//     paddingLeft: 20,
//     paddingBottom: 20,
//   },
//   yAxisLabel: {
//     width: 30,
//     height: "100%",
//     textAlign: "right",
//     color: "#555",
//   },
//   xAxisLabel: {
//     width: "100%",
//     textAlign: "center",
//     color: "#555",
//     paddingTop: 10,
//   },
//   axisLine: {
//     width: "100%",
//     height: 2,
//     backgroundColor: "#555",
//   },
// });

// // Define el componente del gráfico
// const Grafica = () => {
//   // // Obtiene el máximo de ventas para calcular la altura de las barras
//   // const maxSales = Math.max(...data.map((item) => item.sales));

//   // return (
//   //   <View style={styles.chartContainer}>
//   //     {data.map((item) => (
//   //       <View key={item.month} style={styles.barContainer}>
//   //         <View style={{ height: (item.sales / maxSales) * 200 }} />
//   //         <Text style={styles.barLabel}>{item.month}</Text>
//   //       </View>
//   //     ))}
//   //   </View>
//   // );

//   // Obtiene el máximo de ventas para calcular la altura de las barras
//   const maxSales = Math.max(...data.map((item) => item.sales));
//   const minSales = Math.min(...data.map((item) => item.sales));

//   return (
//     <View style={styles.chartContainer}>
//       {data.map((item) => (
//         <View key={item.month} style={styles.barContainer}>
//           <View
//             style={{
//               height: ((item.sales - maxSales) / (minSales - maxSales)) * 200,
//             }}
//           />
//           <Text style={styles.barLabel}>
//             {item.month} {"\n"}
//             <Text style={{ fontSize: 10 }}>
//               {(
//                 ((item.sales - minSales) / (maxSales - minSales)) *
//                 100
//               ).toFixed(2)}
//               %
//             </Text>
//           </Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default Grafica;

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
  { month: "Ene", sales: 10 },
  { month: "Feb", sales: 20 },
  { month: "Mar", sales: 30 },
  { month: "Abr", sales: 40 },
  { month: "May", sales: 50 },
  { month: "Jun", sales: 60 },
  { month: "Jul", sales: 70 },
];

// Define los estilos para el gráfico y el plano cartesiano
const styles = StyleSheet.create({
  chartContainer: {
    marginTop: "10%",
    width: "80%",
    height: 400,
    flexDirection: "row",
    margin: "9%",
  },
  barContainer: {
    flexGrow: 1,
    margin: 5,
    backgroundColor: "#007bff",
    position: "relative",
  },
  barLabel: {
    // position: "absolute",
    // bottom: -7,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
  },
  axisContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
    paddingTop: 3,
    marginLeft: 62,
  },
  axisLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#555",
  },
});

const Grafica = () => {
  // Ordena los datos por las ventas en orden ascendente
  const sortedData = [...data].sort((a, b) => a.sales - b.sales);

  // Obtiene el máximo de ventas para calcular la altura de las barras
  const maxSales = Math.max(...data.map((item) => item.sales));
  const minSales = Math.min(...data.map((item) => item.sales));

  // Define el ancho y alto del gráfico
  const width = 400;
  const height = 300;

  return (
    // <View style={styles.chartContainer}>
    //   {sortedData.map((item) => (
    //     <View key={item.month} style={styles.barContainer}>
    //       <View
    //         style={{
    //           height: ((item.sales - maxSales) / (minSales - maxSales)) * 200,
    //         }}
    //       />
    //       <Text style={styles.barLabel}>
    //         <Text style={{ fontSize: 10 }}>
    //           {(
    //             ((item.sales - minSales) / (maxSales - minSales)) *
    //             100
    //           ).toFixed(2)}
    //           %
    //         </Text>
    //         {"\n"}
    //         {item.month}
    //       </Text>
    //     </View>
    //   ))}
    // </View>

    <View style={{ width, height }}>
      {/* Dibuja el eje Y */}
      <View style={[styles.axisContainer, { height }]}>
        <View style={{ height: "100%", justifyContent: "space-between" }}>
          <Text style={styles.yAxisLabel}>{maxSales.toFixed(2)}</Text>
          <Text style={styles.yAxisLabel}>
            {((maxSales + minSales) / 2).toFixed(2)}
          </Text>
          <Text style={styles.yAxisLabel}>{minSales.toFixed(2)}</Text>
        </View>
        <View style={styles.axisLine} />
      </View>

      {/* Dibuja las barras y los textos */}
      <View style={styles.chartContainer}>
        {sortedData.map((item) => (
          <View key={item.month} style={styles.barContainer}>
            <View
              style={{
                height:
                  ((item.sales - maxSales) / (minSales - maxSales)) *
                  (height - 200),
              }}
            />
            <Text style={styles.barLabel}>
              <Text style={{ fontSize: 10 }}>
                {(
                  ((item.sales - minSales) / (maxSales - minSales)) *
                  100
                ).toFixed(2)}
                %
              </Text>
              {"\n"}
              {item.month}
            </Text>
          </View>
        ))}
      </View>

      {/* Dibuja el eje X */}
      <View style={[styles.axisContainer, { width }]}>
        {data.map((item, index) => (
          <Text key={index} style={styles.xAxisLabel}>
            {item.month}
          </Text>
        ))}
        <View style={styles.axisLine} />
      </View>
    </View>
  );
};

export default Grafica;
