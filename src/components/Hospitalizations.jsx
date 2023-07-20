import React, { useState } from "react";
import StandardBar from "./chart/StandardBar";
import moment from "moment";
import SwitchTextChart from "./button/SwitchTextChart";
import SelectCurrentKey from "./button/SelectCurrentKey";
import SelectTimeRange from "./button/SelectTimeRange";

const Hospitalizations = ({lastMonth}) => {
  const [isText, setIsText] = useState({
    main: false,
    a: false,
    b: false,
    c: false
  });
  const [currentKeyBar, setCurrentKeyBar] = useState(["hospitalized"]);
  const [timeRange, setTimeRange] = useState('week')

  const lastTwoDay = lastMonth.slice(-2)
  const prevDay = lastTwoDay[0]
  const lastDay = lastTwoDay[1]


  //Time Range of data chart

  const getTimeRange = {
    "month": lastMonth,
    "twoWeek": lastMonth.slice(-14),
    "week": lastMonth.slice(-7)
  }

  // console.log(getTimeRange);

  // deconstruction data

  const {
    ricoverati_con_sintomi,
    terapia_intensiva,
    totale_ospedalizzati,
    isolamento_domiciliare,
    ingressi_terapia_intensiva,
  } = lastDay;

  //previous Day

  const HospitalizedPrevDay = prevDay.ricoverati_con_sintomi;
  const isolationPrevDay = prevDay.isolamento_domiciliare;

  //last Day

  const lastHospitalized = ricoverati_con_sintomi - HospitalizedPrevDay;
  const lastIsolation = isolamento_domiciliare - isolationPrevDay;

  //##### Data for Bar Chart ####

  const dataBarHospitalized = getTimeRange[timeRange].map((day) => {
    const arrayHospitalized = {
      id: moment(day.data).format("MMM D"),
      hospitalized: day.totale_ospedalizzati,
    };
    return arrayHospitalized;
  });

  const dataBarIsolation = getTimeRange[timeRange].map((day) => {
    const arrayIsolation = {
      id: moment(day.data).format("MMM D"),
      isolation: day.isolamento_domiciliare,
    };
    return arrayIsolation;
  });

  const dataBarIntensiveCare = getTimeRange[timeRange].map((day) => {
    const arrayIntensiveCare = {
      id: moment(day.data).format("MMM D"),
      "intensive care": day.terapia_intensiva,
    };
    return arrayIntensiveCare;
  });

  const currentDatabar = {
    hospitalized: dataBarHospitalized,
    isolation: dataBarIsolation,
    "intensive care": dataBarIntensiveCare,
  };

  // keysBar "hospitalized", "isolation", "intensiveCare"

  //Handle click function

  const handleClickCurrentKey = (string) => {
    setCurrentKeyBar(string);
  };

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  return (
    <div className="relative test-container ">
      {!isText.main ? (
        <>

          <div className="absolute">
              <SwitchTextChart
                component={"main"}
                switchText={handleClickSwitch}
                isText={isText.main}
              />
            </div>

            <div className="col-span-12 pt-4 text-xl">
            <h3 className="text-2xl font-semibold">Ospedalizzazioni</h3>
            {/* <span className="text-3xl font-bold"> */}
              {totale_ospedalizzati.toLocaleString("it-IT")}
            {/* </span> */}
            </div>

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
            

          <div className="h-[400px] col-span-12 bg-white/70 rounded-md">
            <StandardBar
              data={currentDatabar[currentKeyBar]}
              keysBar={currentKeyBar}
            />
          </div>

          <div className="col-span-12">
            <SelectCurrentKey
              handleClickCurrentKey={handleClickCurrentKey}
              text={"hospitalized"}
              keyData={"hospitalized"}
            />
            <SelectCurrentKey
              handleClickCurrentKey={handleClickCurrentKey}
              text={"isolation"}
              keyData={"isolation"}
            />
            <SelectCurrentKey
              handleClickCurrentKey={handleClickCurrentKey}
              text={"intensive care"}
              keyData={"intensive care"}
            />

          </div>
        </>
      ) : (
        <>
          <div className="relative col-span-12 p-4 border-primary/50 dark:border-dark-quaternary/50 border-2 rounded-t-md  bg-quaternary/50 dark:bg-dark-primary/50 text-center">
            <SwitchTextChart
              component={"main"}
              switchText={handleClickSwitch}
              isText={isText.main}
            />

            <h3 className="text-2xl font-semibold">Ospedalizzazioni</h3>
            <span className="text-3xl font-bold">
              {totale_ospedalizzati.toLocaleString("it-IT")}
            </span>
          </div>

          <div className="test-card">
            <p>Terapia intensiva</p>
            <span className="text-3xl">
              {ingressi_terapia_intensiva.toLocaleString("it-IT")}
            </span>
            <p>Totale Terapia Intensiva </p>
            <span className="text-3xl">
              {terapia_intensiva.toLocaleString("it-IT")}
            </span>
          </div>
          <div className="test-card">
            <p>Ricoveri </p>
            <span className="text-3xl">
              {lastHospitalized.toLocaleString("it-IT")}
            </span>
            <p>Totale ricoverati </p>
            <span className="text-3xl">
              {ricoverati_con_sintomi.toLocaleString("it-IT")}
            </span>
          </div>
          <div className="test-card">
            <p>Isolamento domiciliare </p>
            <span className="text-3xl">
              {lastIsolation.toLocaleString("it-IT")}
            </span>
            <p>Totale Isolamento domiciliare </p>
            <span className="text-3xl">
              {isolamento_domiciliare.toLocaleString("it-IT")}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Hospitalizations;
