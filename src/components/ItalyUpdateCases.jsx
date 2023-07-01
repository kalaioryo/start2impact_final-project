import React, { useState } from "react";
import SwitchTextChart from "./button/SwitchTextChart";
import StandardLine from "./chart/StandardLine";
import moment from "moment";

const ItalyUpdateCases = ({ lastDayData, prevDayData, lastMonth, day31 }) => {
  const [timeRange, setTimeRange] = useState("month");
  const [isText, setIsText] = useState({
    main: false,
    a: false,
    b: false,
    c: false,
  });

  //Time Range of data chart

  const getTimeRange = {
    month: lastMonth,
    twoWeek: lastMonth.slice(-14),
    week: lastMonth.slice(-7),
  };

  //add one day for diff data

  const dayForDiffData = {
    month: day31[0].dimessi_guariti,
    twoWeek: lastMonth.slice(-15, -14)[0].dimessi_guariti,
    week: lastMonth.slice(-8, -7)[0].dimessi_guariti,
  };

  //##### Data for Bar Chart ####

  const dataLineDead = getTimeRange[timeRange].map((day) => {
    const objectDead = {
      x: moment(day.data).format("MMM D"),
      y: day.deceduti,
    };
    return objectDead;
  });

  const dataLineHealed = getTimeRange[timeRange].map((day) => {
    const objectHealed = {
      x: moment(day.data).format("MMM D"),
      y: day.dimessi_guariti,
    };
    return objectHealed;
  });

  const dataLineNewPositive = getTimeRange[timeRange].map((day) => {
    const objectNewPositive = {
      x: moment(day.data).format("MMM D"),
      y: day.nuovi_positivi,
    };
    return objectNewPositive;
  });

  //#### array element - arrayCopied element
  const wrapperNewHealed = () => {

    //Coping array for difference of data
    let arrayPrev = getTimeRange[timeRange].map((day) => day.dimessi_guariti);
    let copyArray = [...arrayPrev];
    let finalArray = [];


    //remove last data of day and add previous day
    copyArray.pop();
    copyArray.unshift(dayForDiffData[timeRange]);

    //loop for finding difference of data
    arrayPrev.forEach(function (value, i) {
      copyArray.forEach(function (valueCopied, k) {
        if (k === i) {
          let diffSingleData = value - valueCopied;
          finalArray.push(diffSingleData);
          return;
        }
      });
    });

    //create objects for data 
    const dataLineNewHealed = getTimeRange[timeRange].map((day, index) => {
      const objectNewHealed = {
        x: moment(day.data).format("MMM D"),
        y: finalArray[index],
      };

      return objectNewHealed;
    });

    return dataLineNewHealed;
  };

  const categoryData = [
    // {
    //   id: "dead",
    //   data: dataLineDead
    // },
    // {
    //   id: "healed",
    //   data: dataLineHealed
    // },
    // {
    //   id: "Nuovi Positivi",
    //   data: dataLineNewPositive
    // },
    {
      id: "Nuovi Guariti",
      data: wrapperNewHealed(),
    },
  ];

  // console.log(categoryData);

  // deconstruction data

  const dead = lastDayData.deceduti;
  const deadPrevDay = prevDayData.deceduti;
  console.log(dead);

  const healed = lastDayData.dimessi_guariti;
  const healedPrevDay = prevDayData.dimessi_guariti;

  const { variazione_totale_positivi, totale_positivi } = lastDayData;
  const positivePrevDay = prevDayData.totale_positivi;

  // const perceptualUpdate = (( variazione_totale_positivi / totale_positivi) * 100).toFixed(2)

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  return (
    <div className="test-container relative">
      {!isText.main ? (
        <>
          <div className=" absolute">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />
          </div>

          <div className="h-[400px] col-span-12">
            <StandardLine data={categoryData} />
          </div>
        </>
      ) : (
        <>
          <div className="absolute">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />
          </div>

          <div className="p-4 col-span-12 xl:col-span-3 border-black border-4  bg-ternary/30 text-center">
            <h3 className="text-2xl font-semibold">ItalyUpdateCases</h3>
          </div>

          <div className="test-card relative">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />
            <p>Morti </p>
            <span className="text-3xl">
              {(dead - deadPrevDay).toLocaleString("it-IT")}
            </span>
            <p>Totale morti </p>
            <span className="text-3xl">{dead.toLocaleString("it-IT")}</span>
          </div>

          <div className="test-card relative">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />

            <p>Guariti </p>
            <span className="text-3xl">
              {(healed - healedPrevDay).toLocaleString("it-IT")}
            </span>
            <p>Totale guariti </p>
            <span className="text-3xl">{healed.toLocaleString("it-IT")}</span>
          </div>

          <div className="test-card relative">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />

            <p>Variazione positivi </p>
            <span className="text-3xl">
              {variazione_totale_positivi.toLocaleString("it-IT")}
            </span>
            <p>totale positivi </p>
            <span className="text-3xl">
              {totale_positivi.toLocaleString("it-IT")}
            </span>
          </div>
        </>
      )}

      {/* <div className="h-[200px] col-span-8">Chart</div> */}
    </div>
  );
};

export default ItalyUpdateCases;
