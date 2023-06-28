import React, { useState } from "react";
import StandardBar from "./chart/StandardBar";
import moment from "moment";
import SwitchTextChart from "./button/SwitchTextChart";
import SelectCurrentKey from "./button/SelectCurrentKey";
import SelectTimeRange from "./button/SelectTimeRange";

const ItalyHospitalizations = ({ lastDayData, prevDayData, lastTwoWeek, lastMonth }) => {
  const [isText, setIsText] = useState({
    a: false,
  });
  const [currentKeyBar, setCurrentKeyBar] = useState(["hospitalized"]);
  const [timeRange, setTimeRange] = useState('month')


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
  } = lastDayData;

  //previous Day

  const HospitalizedPrevDay = prevDayData.ricoverati_con_sintomi;
  const isolationPrevDay = prevDayData.isolamento_domiciliare;

  //last Day

  const lastHospitalized = ricoverati_con_sintomi - HospitalizedPrevDay;
  const lastIsolation = isolamento_domiciliare - isolationPrevDay;

  //##### Data for Bar Chart ####

  const dataBarHospitalized = getTimeRange[timeRange].map((Day) => {
    const arrayHospitalized = {
      id: moment(Day.data).format("MMM D"),
      hospitalized: Day.totale_ospedalizzati,
    };
    return arrayHospitalized;
  });

  const dataBarIsolation = getTimeRange[timeRange].map((Day) => {
    const arrayIsolation = {
      id: moment(Day.data).format("MMM D"),
      isolation: Day.isolamento_domiciliare,
    };
    return arrayIsolation;
  });

  const dataBarIntensiveCare = getTimeRange[timeRange].map((Day) => {
    const arrayIntensiveCare = {
      id: moment(Day.data).format("MMM D"),
      "intensive care": Day.terapia_intensiva,
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
    <div className="relative grid grid-cols-12 col-span-12 lg:col-start-8 lg:col-span-4 xl:col-span-10 xl:col-start-2 gap-4  text-center border-4 border-orange-800">
      {!isText.a ? (
        <>
          <div className="relative">
              <SwitchTextChart
                component={"a"}
                switchText={handleClickSwitch}
                isText={isText.a}
              />
            </div>

            <div className="flex justify-center col-span-12">
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

            

          <div className="h-[400px] col-span-12">
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
          <div className="relative col-span-12  xl:col-span-3 p-4 border-black border-4  bg-ternary/50 text-center">
            <SwitchTextChart
              component={"a"}
              switchText={handleClickSwitch}
              isText={isText.a}
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

export default ItalyHospitalizations;
