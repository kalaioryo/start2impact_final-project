import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

import moment from "moment/moment";

const ItalyMap = ({ typeData }) => {

  const [valueRange, setValueRange] = useState(0);
  const dataMap = useSelector((state) => state.regionsLatest);
  const { loading, regionsLatest, error } = dataMap;
  const WordLegend = typeData.replaceAll("_", " ");

  let date = moment(regionsLatest[0].data).format("L");

  const options = {
    region: "IT", // Italia
    resolution: "provinces",
    colorAxis: {
      colors: ["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"],
    },
    backgroundColor: "#576CBC",
    datalessRegionColor: "lightGray",
    defaultColor: "#f5f5f5",
    // margin: "35%",
  };

  const dataChart = [["Country", WordLegend]];

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
    <div className="backdrop-blur-md m-2 md:ml-20">
      <div>
        <h3 className="py-4 first-letter:uppercase text-3xl text-center">
          {WordLegend}
        </h3>
        <p className="text-center m-2">aggiornati al {date}</p>
      </div>

      <div className="p-4 pt-12">

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
};

export default ItalyMap;
