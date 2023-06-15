import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";


const ItalyMap = ({typeData}) => {
  const [ valueRange, setValueRange ] = useState(0)
  const dataMap = useSelector((state) => state.regionsLatest)
  const {loading, regionsLatest, error} = dataMap


  // console.log(dataMap);

  const WordLegenda =  typeData.replaceAll('_', ' ')

  console.log(typeData);
  console.log(WordLegenda);

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

  // console.log(regionsLatest);
  const createDataChart = (typeData) => {
    let trento = 0
    let bolzano = 0
    
    regionsLatest.map((region) => {

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

  createDataChart(typeData)

  // const handleChange = (e) =>{
  //   console.log(e.target.value);
  //   setValueRange(e.target.value)
  // }

  // console.log(valueRange);

  return (
    <div className=" bg-slate-400">

      <div>
        <h3 className="first-letter:uppercase text-3xl text-center">{WordLegenda}</h3>
        <p className="text-center m-2">aggiornati al {regionsLatest[0].data}</p>
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

      {/* <div className="flex justify-center">
        <input onChange={handleChange} type="range" min={0} max={50}/>
      </div> */}
          
    </div>
    
  );
}

export default ItalyMap
