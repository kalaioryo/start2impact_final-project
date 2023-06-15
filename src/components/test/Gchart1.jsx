import React from 'react'

import { Chart } from "react-google-charts";

const Gchart1 = () => {

  // const options = {
  //   title: "Age vs. Weight comparison",
  //   hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  //   vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  //   legend: "none"
  // };
  
  // const data = [
  //   ["Age", "Weight"],
  //   [8, 12],
  //   [4, 5.5],
  //   [11, 14],
  //   [4, 5],
  //   [3, 3.5],
  //   [6.5, 7]
  // ];

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

 const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };
  return (
    <div>

      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  )
}

export default Gchart1