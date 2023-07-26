import React, { useState } from "react";
import PropTypes, { arrayOf } from "prop-types";

import SwitchTextChart from "./button/SwitchTextChart";
import RingPie from "./chart/RingPie";
import StandardPie from "./chart/StandardPie";

const Swabs = ({ lastMonth }) => {
  const [isText, setIsText] = useState({
    a: false,
    b: false,
  });
  const [isLastDay, setIsLastDay] = useState(true);

  const lastTwoDay = lastMonth.slice(-2);
  const prevDay = lastTwoDay[0];
  const lastDay = lastTwoDay[1];

  //tot swabs lastDay data
  const {
    tamponi,
    totale_positivi_test_molecolare,
    totale_positivi_test_antigenico_rapido,
    tamponi_test_molecolare,
    tamponi_test_antigenico_rapido,
  } = lastDay;

  //tot swabs PrevDay data
  const totSwabsPrevDay = prevDay.tamponi;
  const totSwabsMolPositivePrevDay = prevDay.totale_positivi_test_molecolare;
  const totQuickSwabsPositivePrevDay =
    prevDay.totale_positivi_test_antigenico_rapido;
  const totSwabsMolPrevDay = prevDay.tamponi_test_molecolare;
  const totQuickSwabsPrevDay = prevDay.tamponi_test_antigenico_rapido;

  //swabs lastDay
  const lastDaySwabs = tamponi - totSwabsPrevDay;
  const lastDaySwabsMolPositive =
    totale_positivi_test_molecolare - totSwabsMolPositivePrevDay;
  const lastDayQuickSwabsPositive =
    totale_positivi_test_antigenico_rapido - totQuickSwabsPositivePrevDay;
  const lastDaySwabsMol = tamponi_test_molecolare - totSwabsMolPrevDay;
  const lastDayQuickSwabs =
    tamponi_test_antigenico_rapido - totQuickSwabsPrevDay;

  //positive %
  const totLastDaySwabsPositive =
    lastDaySwabsMolPositive + lastDayQuickSwabsPositive;

  const perceptualPositive = (
    (totLastDaySwabsPositive / lastDaySwabs) *
    100
  ).toFixed(1);

  const perceptualNegative = 100 - perceptualPositive;

  //#### Data Pie chart

  // Data Component A

  const dataPieSwabs = [
    {
      id: "Molecolari",
      label: "Molecolari",
      value: lastDaySwabsMol,
    },
    {
      id: "Antigenico",
      label: "Antigenico",
      value: lastDayQuickSwabs,
    },
  ];

  const dataPieTotalSwabs = [
    {
      id: "Molecolari",
      label: "Molecolari",
      value: tamponi_test_molecolare,
    },
    {
      id: "Antigenico",
      label: "Antigenico",
      value: tamponi_test_antigenico_rapido,
    },
  ];

  //Data Component B

  const dataPiePositive = [
    {
      id: "Molecolari",
      label: "Molecolari",
      value: lastDaySwabsMolPositive,
    },
    {
      id: "Antigenico",
      label: "Antigenico",
      value: lastDayQuickSwabsPositive,
    },
  ];

  const dataPieTotalPositive = [
    {
      id: "Molecolari",
      label: "Molecolari",
      value: totale_positivi_test_molecolare,
    },
    {
      id: "Antigenico",
      label: "Antigenico",
      value: totale_positivi_test_antigenico_rapido,
    },
  ];

    //### Data Component C

    const dataPieRing = [
      {
        id: "Positive",
        label: "Positive",
        value: perceptualPositive,
      },
      {
        id: "Negative",
        label: "Negative",
        value: perceptualNegative,
      },
    ];

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  return (
    <div className="test-container">
      <div className="p-4 col-span-12 shadow-lg border-2 rounded-md  bg-quaternary/80 dark:bg-dark-primary/50 dark:border-dark-quaternary/50 text-center">
        <h3 className="text-2xl font-semibold">
          Tamponi {isLastDay ? "ultimi dati" : "Totali"}
        </h3>
        <span className="block p-3 text-3xl font-bold">
          {isLastDay
            ? lastDaySwabs.toLocaleString("it-IT")
            : tamponi.toLocaleString("it-IT")}
        </span>

        <div className="flex justify-evenly">
          <button className="my-6">
            <span
              className="p-4 bg-secondary/20 hover:bg-ternary/50 dark:bg-dark-secondary dark:hover:bg-dark-ternary dark:hover:text-dark-primary rounded-lg"
              onClick={() => setIsLastDay(true)}
            >
              Ultimi dati
            </span>
          </button>

          <button className="my-2">
            <span
              className="p-4 bg-secondary/20 hover:bg-ternary/50 dark:bg-dark-secondary dark:hover:bg-dark-ternary dark:hover:text-dark-primary rounded-lg"
              onClick={() => setIsLastDay(false)}
            >
              Totale
            </span>
          </button>
        </div>
      </div>

      {/* ##### component A ##### */}

      <div className="test-card relative px-16">
        <SwitchTextChart
          component={"a"}
          switchText={handleClickSwitch}
          isText={isText.a}
        />

        {isText.a ? (
          <>
            <p>Tamponi molecolari </p>
            <span className="text-3xl">
              {isLastDay
                ? lastDaySwabsMol.toLocaleString("it-IT")
                : tamponi_test_molecolare.toLocaleString("it-IT")}
            </span>
            <p>Tamponi antigenico </p>
            <span className="text-3xl">
              {isLastDay
                ? lastDayQuickSwabs.toLocaleString("it-IT")
                : tamponi_test_antigenico_rapido.toLocaleString("it-IT")}
            </span>
          </>
        ) : (
          <div className="h-[300px]">
            <h3>Tamponi usati</h3>
            <StandardPie data={isLastDay ? dataPieSwabs : dataPieTotalSwabs} />
          </div>
        )}
      </div>

      {/* #### component B ##### */}

      <div className="test-card relative px-16">
        <SwitchTextChart
          component={"b"}
          switchText={handleClickSwitch}
          isText={isText.b}
        />

        {isText.b ? (
          <>
            <p>Positivi molecolari </p>
            <span className="text-3xl">
              {isLastDay
                ? lastDaySwabsMolPositive.toLocaleString("it-IT")
                : totale_positivi_test_molecolare.toLocaleString("it-IT")}
            </span>
            <p>Positivi antigenico </p>
            <span className="text-3xl">
              {isLastDay
                ? lastDayQuickSwabsPositive.toLocaleString("it-IT")
                : totale_positivi_test_antigenico_rapido.toLocaleString(
                    "it-IT"
                  )}
            </span>
          </>
        ) : (
          <div className="h-[300px]">
            <h3>Tamponi positivi</h3>
            <StandardPie
              data={isLastDay ? dataPiePositive : dataPieTotalPositive}
            />
          </div>
        )}
      </div>

      {/* #### component C #### */}

      <div className="test-card relative">
        <div className="col-span-1 col-start-2">
          <p className="p-2 text-xl text-center absolute top-[35%] left-[40%] md:left-[38%]">
            Positività
          </p>
          <span className="block text-3xl absolute top-[45%] left-[44%]  md:left-[41%]">
            {perceptualPositive}%
          </span>
          <div className="h-[300px]">
            <RingPie data={dataPieRing} />
          </div>
        </div>
      </div>
    </div>
  );
};

Swabs.propTypes = {
  lastMonth: arrayOf(
    PropTypes.shape({
      tamponi: PropTypes.number.isRequired,
      totale_positivi_test_molecolare: PropTypes.number.isRequired,
      totale_positivi_test_antigenico_rapido: PropTypes.number.isRequired,
      tamponi_test_molecolare: PropTypes.number.isRequired,
      tamponi_test_antigenico_rapido: PropTypes.number.isRequired,
    })
  ),
};

export default Swabs;