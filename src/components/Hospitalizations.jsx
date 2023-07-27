import React, { useState } from "react";
import PropTypes from "prop-types";

import moment from "moment";

import StandardBar from "./chart/StandardBar";
import SwitchTextChart from "./button/SwitchTextChart";
import SelectCurrentKey from "./button/SelectCurrentKey";
import SelectTimeRange from "./button/SelectTimeRange";

const Hospitalizations = ({ lastMonth }) => {
  const [isText, setIsText] = useState({
    main: false,
    a: false,
    b: false,
    c: false,
  });
  const [currentKeyBar, setCurrentKeyBar] = useState(["ospedalizzati"]);
  const [timeRange, setTimeRange] = useState("week");

  const lastTwoDay = lastMonth.slice(-2);
  const prevDay = lastTwoDay[0];
  const lastDay = lastTwoDay[1];

  //Time Range of data chart

  const getTimeRange = {
    month: lastMonth,
    twoWeek: lastMonth.slice(-14),
    week: lastMonth.slice(-7),
  };

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
      ospedalizzati: day.totale_ospedalizzati,
    };
    return arrayHospitalized;
  });

  const dataBarIsolation = getTimeRange[timeRange].map((day) => {
    const arrayIsolation = {
      id: moment(day.data).format("MMM D"),
      isolamento: day.isolamento_domiciliare,
    };
    return arrayIsolation;
  });

  const dataBarIntensiveCare = getTimeRange[timeRange].map((day) => {
    const arrayIntensiveCare = {
      id: moment(day.data).format("MMM D"),
      "terapia intensiva": day.terapia_intensiva,
    };
    return arrayIntensiveCare;
  });

  const currentDatabar = {
    ospedalizzati: dataBarHospitalized,
    isolamento: dataBarIsolation,
    "terapia intensiva": dataBarIntensiveCare,
  };

  // keysBar "ospedallizzati", "isolamento", "terapia intensiva"

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
            <p className="text-3xl">{totale_ospedalizzati.toLocaleString("it-IT")}</p>
          </div>

          <div className="flex justify-end mr-[2%] col-span-12">
            <SelectTimeRange
              text={"7 giorni"}
              setTimeRange={setTimeRange}
              timeRange={"week"}
            />

            <SelectTimeRange
              text={"14 giorni"}
              setTimeRange={setTimeRange}
              timeRange={"twoWeek"}
            />

            <SelectTimeRange
              text={"30 giorni"}
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
              text={"ospedalizzati"}
              keyData={"ospedalizzati"}
            />
            <SelectCurrentKey
              handleClickCurrentKey={handleClickCurrentKey}
              text={"isolamento"}
              keyData={"isolamento"}
            />
            <SelectCurrentKey
              handleClickCurrentKey={handleClickCurrentKey}
              text={"terapia intensiva"}
              keyData={"terapia intensiva"}
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

Hospitalizations.propTypes = {
  lastMonth: PropTypes.arrayOf(
    PropTypes.shape({
      ricoverati_con_sintomi: PropTypes.number.isRequired,
      terapia_intensiva: PropTypes.number.isRequired,
      totale_ospedalizzati: PropTypes.number.isRequired,
      isolamento_domiciliare: PropTypes.number.isRequired,
      ingressi_terapia_intensiva: PropTypes.number.isRequired,
    })
  ),
};

export default Hospitalizations;
