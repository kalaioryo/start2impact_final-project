import React, { useState } from "react";
import moment from "moment";

import StandardLine from "./chart/StandardLine";

import SwitchTextChart from "./button/SwitchTextChart";
import SelectTimeRange from "./button/SelectTimeRange";
import SelectCategoryInput from "./input/SelectCategoryInput";

const UpdateCases = ({lastMonth, day31Ago }) => {
  const [timeRange, setTimeRange] = useState("week");
  const [category, setCategory] = useState("nuovi dati")
  const [isText, setIsText] = useState({
    main: false,
    a: false,
    b: false,
    c: false,
  });

  // console.log(category);

  const lastTwoDay = lastMonth.slice(-2)
  const prevDay = lastTwoDay[0]
  const lastDay = lastTwoDay[1]

  //Time Range of data chart

  const getTimeRange = {
    month: lastMonth,
    twoWeek: lastMonth.slice(-14),
    week: lastMonth.slice(-7),
  };

  //add one day for diff data

  const dayForDiffData = {
    month: day31Ago[0].dimessi_guariti,
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

  const dataLineVariation = getTimeRange[timeRange].map((day) => {
    const objectVaration = {
      x: moment(day.data).format("MMM D"),
      y: day.variazione_totale_positivi
    }
    return objectVaration
  })

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

//categories for props select input

  const categories = [
    "nuovi dati",
    "nuovi positivi",
    "nuovi guariti",
    "morti",
    "guariti",
    "Variazione totale positivi"
  ]

  //All categories data

  const categoryData = [
    {
      id: "Nuovi Positivi",
      data: dataLineNewPositive
    },
    {
      id: "Nuovi Guariti",
      data: wrapperNewHealed(),
    },
    {
      id: "dead",
      data: dataLineDead
    },
    {
      id: "healed",
      data: dataLineHealed
    },
    {
      id: "Variazione totale positivi",
      data: dataLineVariation
    }
  ];

  //Data selected from select input

  const selectCategory = {
    "nuovi dati": categoryData.slice(0,2),
    "nuovi positivi": [categoryData[0]],
    "nuovi guariti": [categoryData[1]],
    "morti" : [categoryData[2]],
    "guariti" : [categoryData[3]],
    "Variazione totale positivi" : [categoryData[4]]
  }

  // console.log(categoryData[0]);
  // console.log(categoryData[4]);


  // deconstruction data
  const dead = lastDay.deceduti;
  const deadPrevDay = prevDay.deceduti;

  const healed = lastDay.dimessi_guariti;
  const healedPrevDay = prevDay.dimessi_guariti;

  const { variazione_totale_positivi, totale_positivi } = lastDay;
  const positivePrevDay = prevDay.totale_positivi;

  // const perceptualUpdate = (( variazione_totale_positivi / totale_positivi) * 100).toFixed(2)

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }

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

          <div className="col-span-12 pt-4 text-xl">
            <h3 >Aggiornamento Casi</h3>
          </div>

          {/* Select Input */}
          <div className="col-span-12 md:col-span-7 md:col-start-3 lg:col-span-4 lg:col-start-5">
            <SelectCategoryInput
              categorySelect={category}
              categories={categories}
              handleChangeCategory={handleChangeCategory}
            />
          </div>

          {/* buttons select time range */}

          <div className="flex justify-end mr-[2%] col-span-12">
            <SelectTimeRange
              text={"week"}
              setTimeRange={setTimeRange}
              timeRange={"week"}
            />

            <SelectTimeRange
              text={"twoWeek"}
              setTimeRange={setTimeRange}
              timeRange={"twoWeek"}
            />

            <SelectTimeRange
              text={"month"}
              setTimeRange={setTimeRange}
              timeRange={"month"}
            />          
            </div>

            {/* Line chart */}

          <div className="h-[400px] col-span-12 bg-white/70 rounded-md">
            <StandardLine data={selectCategory[category]} />
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

          <div className="p-4 col-span-12 border-primary/50 border-2 rounded-md bg-quaternary/50 dark:border-dark-quaternary/50 dark:bg-dark-primary/50  text-center">
            <h3 className="text-2xl font-semibold">UpdateCases</h3>
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

export default UpdateCases;
