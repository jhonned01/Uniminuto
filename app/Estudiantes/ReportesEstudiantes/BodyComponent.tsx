"use client";
import { Page, PDFViewer, View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import MyDocument from "./MyDocument";

const BodyComponent = () => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100Vh" }}>
        <MyDocument />
      </PDFViewer>
    </>
  );
};

export default BodyComponent;
