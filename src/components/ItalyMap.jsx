import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

import moment from "moment/moment";

const ItalyMap = ({ typeData }) => {

  // const [ sizeChart, setSizeChart ] = useState(false)
  const [valueRange, setValueRange] = useState(0);
  const dataMap = useSelector((state) => state.regionsLatest);
  const { loading, regionsLatest, error } = dataMap;
  const WordLegenda = typeData.replaceAll("_", " ");

  // useEffect(() => {}, []);

  let date = moment(regionsLatest[0].data).format("L");

  var width = 1.5 * window.innerHeight;
  var height = 1.5 * window.innerWidth;

  const options = {
    region: "IT", // Italia
    resolution: "provinces",
    colorAxis: {
      colors: ["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"],
    },
    backgroundColor: "transparent",
    datalessRegionColor: "lightGray",
    defaultColor: "#f5f5f5",
    // chartArea: { width: "100%", height: "70%" }
    // legend: "none",
  };

  const dataChart = [["Country", WordLegenda]];

  // console.log(regionsLatest);
  const createDataChart = (typeData) => {
    // setLoadMap(true)

    let trento = 0;
    let bolzano = 0;

    regionsLatest.map((region) => {
      let nameRegion = region.denominazione_regione;
      let dataRegion = region[typeData];
      switch (nameRegion) {
        case "P.A. Bolzano":
          bolzano += dataRegion;
          break;
        case "P.A. Trento":
          trento += dataRegion;
          break;
        case "Friuli Venezia Giulia":
          nameRegion = "Friuli-Venezia Giulia";
          dataChart.push([nameRegion, dataRegion]);
          break;
        default:
          let currentRegion = [nameRegion, dataRegion];
          dataChart.push(currentRegion);
          break;
      }
      return { dataChart, trento, bolzano };
    });

    let trentinoAltoAdige = ["Trentino-Alto Adige", trento + bolzano];
    dataChart.push(trentinoAltoAdige);
    return dataChart;
  };

  createDataChart(typeData);



  return (
    <div className="backdrop-blur-md">
      <div>
        <h3 className="first-letter:uppercase text-3xl text-center">
          {WordLegenda}
        </h3>
        <p className="text-center m-2">aggiornati al {date}</p>
      </div>

      <div className="p-4 h-full w-full ">

          <Chart
            chartType="GeoChart"
            width="100%"
            height="100%"
            data={dataChart}
            options={options}
          />

        {/* {//flex justify-center backdrop-blur-sm } */}
      </div>

      {/* <div className="flex justify-center">
        <input onChange={handleChange} type="range" min={0} max={50}/>
      </div> */}
    </div>
  );
};

export default ItalyMap;
