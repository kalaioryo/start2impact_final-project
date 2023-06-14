import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";


const ItalyMap = ({typeData}) => {
  const dataMap = useSelector((state) => state.regions)
  const {loading, regions, error} = dataMap

  const WordLegenda =  typeData.replace('_', ' ') 

  const options = {
    region: "IT", // Italia
    resolution: "provinces",
    colorAxis: { colors: ["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"] },
    // backgroundColor: "#81d4fa",
    datalessRegionColor: "lightGray",
    defaultColor: "#f5f5f5",
    // magnifyingGlass: {enable: true, zoomFactor: 7.5}
  };

  const dataChart = [
    ["Country", WordLegenda ],
  ]

  console.log(regions);

  const createDataChart = () => {
    let trento = 0
    let bolzano = 0
    

    regions.map((region) => {
      let nameRegion = region.denominazione_regione
      let dataRegion = region[typeData]
      switch (nameRegion) {
        case 'P.A. Bolzano':  
          bolzano += dataRegion
          break;
        case 'P.A. Trento':  
          trento += dataRegion
          break;
        case "Friuli Venezia Giulia":
          nameRegion = "Friuli-Venezia Giulia"
          dataChart.push([nameRegion, dataRegion]) 
          break;
        default:
          let currentRegion = [nameRegion, dataRegion]
          dataChart.push(currentRegion) 
          break;
      }  
      return {dataChart, trento, bolzano}
    })

    let trentinoAltoAdige = ["Trentino-Alto Adige", trento + bolzano]
    dataChart.push(trentinoAltoAdige)
    return dataChart
  }

  createDataChart()

  return (
    <div className="mx-[20%] bg-slate-400">
      <div>
        <h3 className="capitalize text-3xl text-center">{WordLegenda}</h3>
      </div>
      <div className=" p-4 bg-red-400">
        <Chart
            chartType="GeoChart"
            width="100%"
            height="100%"
            data={dataChart}
            options={options}
          />
      </div>
          
    </div>
    
  );
}

export default ItalyMap
