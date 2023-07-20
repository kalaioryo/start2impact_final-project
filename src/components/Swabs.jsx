import React, { useState } from "react";

import { GiOpenBook } from "react-icons/gi";

import LoadingComponent from "./LoadingComponent";
import BaseBar from "./chart/BaseBar";
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

  //Data Chart Component A

  // const barDataSwabs = [
  //   {
  //     id: "questa settimana",
  //     molecolari: lastDaySwabsMol,
  //     antigenici: lastDayQuickSwabs,
  //   },
  // ];

  // const barDataTotSwabs = [
  //   {
  //     id: "Totali",
  //     molecolari: tamponi_test_molecolare,
  //     antigenici: tamponi_test_antigenico_rapido,
  //   },
  // ];

  //Data Chart Component B

  const dataBar = [
    {
      id: "questa settimana",
      molecolari: lastDaySwabsMolPositive,
      antigenici: lastDayQuickSwabsPositive,
    },
  ];

  const dataTotalBar = [
    {
      id: "Totali",
      molecolari: totale_positivi_test_molecolare,
      antigenici: totale_positivi_test_antigenico_rapido,
    },
  ];

  //dataPie

  const dataPie = [
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

  //Data Pie chart

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

  //Keys for Charts

  const keysBar = ["molecolari", "antigenici"];

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  return (
    <div className="test-container">
      <div className="p-4 col-span-12 shadow-lg border-2 rounded-md  bg-quaternary/80 dark:bg-dark-secondary/50 text-center">
        <h3 className="text-2xl font-semibold">
          Tamponi {isLastDay ? "ultimi dati" : "Totali"}
        </h3>
        <span className="block p-3 text-3xl font-bold">
          {isLastDay
            ? lastDaySwabs.toLocaleString("it-IT")
            : tamponi.toLocaleString("it-IT")}
        </span>
        {/* <h3>Totale Tamponi {tamponi.toLocaleString('it-IT')}</h3> */}

        <div className="flex justify-evenly">
          <button className="my-6">
            <span
              className="p-4 bg-secondary/50 dark:bg-dark-primary/50 rounded-lg"
              onClick={() => setIsLastDay(true)}
            >
              Ultimi dati
            </span>
          </button>

          <button className="my-2">
            <span
              className="p-4 bg-secondary/50 dark:bg-dark-primary/50 rounded-lg"
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
            {/* <BaseBar
              data={isLastDay ? barDataSwabs : barDataTotSwabs}
              keysBar={keysBar}
              layout={"horizontal"}
            /> */}
          </div>
        )}
      </div>

      {/* #### component B ##### */}

      <div className="test-card relative px-16">
        <h3>Tamponi positivi</h3>

        <SwitchTextChart
          component={"b"}
          switchText={handleClickSwitch}
          isText={isText.b}
        />

        {isText.b ? (
          <>
            <p className="pt-6">Positivi molecolari </p>
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
            <StandardPie
              data={isLastDay ? dataPiePositive : dataPieTotalPositive}
            />

            {/* <BaseBar
              data={isLastDay ? dataBar : dataTotalBar}
              keysBar={keysBar}
              layout={"horizontal"}
            /> */}
          </div>
        )}
      </div>

      {/* component C*/}

      <div className="test-card relative">
        <div className="col-span-1 col-start-2">
          <p className="p-2 text-xl text-center absolute top-[35%] left-[42%] md:left-[38%]">
            Positività
          </p>
          <span className="block text-3xl absolute top-[45%] left-[45%]  md:left-[41%]">
            {perceptualPositive}%
          </span>
          <div className="h-[300px]">
            <RingPie data={dataPie} perceptual={true} />
          </div>
        </div>

        {/* <div className="h-[200px]">
          <RingPie data={dataPie} perceptual={true} />
        </div> */}
      </div>
    </div>
  );
};

export default Swabs;

//top-[34%] left-[38%] sm:left-[43%] lg:[40%] xl:left-[42%] 2xl:left-[44%] z
