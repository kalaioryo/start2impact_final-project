import React from "react";
import { Chart } from "react-google-charts";

const PABolzano = 40
const PATrento = 5 
const TrentinoAltoAdige = PABolzano + PATrento

export const data = [
  ["Country", "Latitude"],
  ["Molise", 36],
  ["Piemonte", 20],
  ["Campania", 10],
  ["Valle d'Aosta", 16],
  ["Marche", 37],
  ["Sardegna", 25],
  ["Veneto", 24],
  ["Emilia-Romagna", 34],
  ["Trentino-Alto Adige", TrentinoAltoAdige]
  
];

//  ["Trentino-Alto Adige", 45]


export const options = {
  region: "IT", // Africa
  resolution: "provinces",
  colorAxis: { colors: ["green", "yellow", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "lightGray",
  defaultColor: "#f5f5f5",
  // magnifyingGlass: {enable: true, zoomFactor: 7.5}
};

export function GMap() {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
