import React from "react";
import PropTypes from 'prop-types';

import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

import moment from "moment/moment";
import 'moment/locale/it'

const ItalyMap = ({ category }) => {

  const dataMap = useSelector((state) => state.regionsLatest);
  const {regionsLatest} = dataMap;
  const keyWord = category.replaceAll("_", " ");
  
  moment.locale('it')
  let date = moment(regionsLatest[0].data).format("LL");
 
  const options = {
    region: "IT", // Italia
    resolution: "provinces",
    colorAxis: {
      colors: ["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"],
    },
    backgroundColor: "#576CBC",
    datalessRegionColor: "lightGray",
    defaultColor: "#f5f5f5",
  };

  const dataChart = [["Country", keyWord]];

  const createDataChart = (category) => {

    let trento = 0;
    let bolzano = 0;

    regionsLatest.map((region) => {
      let nameRegion = region.denominazione_regione;
      let dataRegion = region[category];
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

  createDataChart(category);

  return (
    <div className="backdrop-blur-md m-1 md:ml-20">
      <div>
        <h3 className="py-4 first-letter:uppercase text-3xl text-center">
          {keyWord}
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

ItalyMap.propTypes = {
  category: PropTypes.string.isRequired
}

export default ItalyMap;