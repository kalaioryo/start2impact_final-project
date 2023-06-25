import React, { useState } from "react";
import Chart from "react-google-charts";
import LoadingComponent from "./LoadingComponent";
import { MyResponsiveBar } from "./MyResponsiveBar";
import { GiOpenBook } from "react-icons/gi";
import BaseBar from "./chart/BaseBar";

// const initialState = {
//   a: false,
//   b: false,
//   c: false
// };

const ItalySwabs = ({ todayData, yesterdayData }) => {
  const [isText, setIsText] = useState( {
    a: false,
    b: false,
    c: false
  });
  const [isToday, setIsToday] = useState(true);

  console.log(isText);

  //tot swabs today data
  const {
    tamponi,
    totale_positivi_test_molecolare,
    totale_positivi_test_antigenico_rapido,
    tamponi_test_molecolare,
    tamponi_test_antigenico_rapido,
  } = todayData;

  //tot swabs yesterday data
  const totSwabsYesterday = yesterdayData.tamponi;
  const totSwabsMolPositiveYesterday =
    yesterdayData.totale_positivi_test_molecolare;
  const totQuickSwabsPositiveYesterday =
    yesterdayData.totale_positivi_test_antigenico_rapido;
  const totSwabsMolYesterday = yesterdayData.tamponi_test_molecolare;
  const totQuickSwabsYesterday = yesterdayData.tamponi_test_antigenico_rapido;

  //swabs today
  const todaySwabs = tamponi - totSwabsYesterday;
  const todaySwabsMolPositive =
    totale_positivi_test_molecolare - totSwabsMolPositiveYesterday;
  const todayQuickSwabsPositive =
    totale_positivi_test_antigenico_rapido - totQuickSwabsPositiveYesterday;
  const todaySwabsMol = tamponi_test_molecolare - totSwabsMolYesterday;
  const todayQuickSwabs =
    tamponi_test_antigenico_rapido - totQuickSwabsYesterday;

  //positive %
  const totTodaySwabsPositive = todaySwabsMolPositive + todayQuickSwabsPositive;
  const perceptualPositive = (
    (totTodaySwabsPositive / todaySwabs) *
    100
  ).toFixed(1);

  const dataBar2 = [
    {id: "Oggi",
      molecolari: todaySwabsMol,
      antigenici: todayQuickSwabs,}
  ]

  const dataTotal2 = [
    {
      id: "Totali",
      molecolari: tamponi_test_molecolare,
      antigenici: tamponi_test_antigenico_rapido,
    }
  ]

  const dataBar = [
    {
      id: "Oggi",
      molecolari: todaySwabsMolPositive,
      antigenici: todayQuickSwabsPositive,
    },
  ];

  const dataTotalBar = [
    {
      id: "Totali",
      molecolari: totale_positivi_test_molecolare,
      antigenici: totale_positivi_test_antigenico_rapido,
    },
  ];

  const keysBar = ["molecolari", "antigenici"];
  const keysBar2 = ["molecolari", "antigenici"];


  return (
    <div className="grid grid-cols-12 relative col-span-12 lg:col-start-5 lg:col-span-5 gap-4  text-center border-4 border-orange-800">
      
      <div className="p-4 col-span-12 border-black border-4  bg-ternary/30 text-center">
        <h3 className="text-3xl font-semibold">Tamponi {isToday ? "Oggi" : "Totali"}</h3>
        <span className="text-3xl font-bold">
          {isToday ? todaySwabs.toLocaleString("it-IT") : tamponi.toLocaleString('it-IT')}
        </span>
        {/* <h3>Totale Tamponi {tamponi.toLocaleString('it-IT')}</h3> */}


        <div className="flex justify-evenly">
          <button className="my-6">
            <span
              className="p-4 bg-quaternary rounded-lg"
              onClick={() => setIsToday(true)}
            >
              Oggi
            </span>
          </button>

          <button className="my-2">
            <span
              className="p-4 bg-quaternary rounded-lg"
              onClick={() => setIsToday(false)}
            >
              Totale
            </span>
          </button>
        </div>
      </div>

      {/* component A*/}

      <div className="test-card relative">

      <button className="absolute right-5 top-4 z-10">
          <span
            className="cursor-pointer text-3xl text-primary rounded"
            onClick={() => setIsText({...isText, a: !isText.a })}
          >
            <GiOpenBook />
          </span>
        </button>

        {
          isText.a ?
          <>
            <p>Tamponi molecolari </p>
            <span className="text-3xl">
              {isToday ? todaySwabsMol.toLocaleString("it-IT") : tamponi_test_molecolare.toLocaleString("it-IT") }
            </span>
            <p>Tamponi antigenico </p>
            <span className="text-3xl">
            {isToday ? todayQuickSwabs.toLocaleString("it-IT") : tamponi_test_antigenico_rapido.toLocaleString("it-IT")}
            </span>
          </> :
          <>
          <div className="h-[250px]">
            <BaseBar
              data={isToday ? dataBar2 : dataTotal2}
              keysBar={keysBar2}
              layout={"horizontal"}
            />
          </div>
        </>
        }
        
        
      </div>

      {/* component B*/}

      <div className="test-card relative">

        <button className="absolute right-5 top-4 z-10">
          <span
            className="cursor-pointer text-3xl text-primary rounded"
            onClick={() => setIsText({...isText, b: !isText.b })}
          >
            <GiOpenBook />
          </span>
        </button>

        {isText.b ? (
          <>
            <p className="pt-6">Positivi molecolari </p>
            <span className="text-3xl">
              {isToday
                ? todaySwabsMolPositive.toLocaleString("it-IT")
                : totale_positivi_test_molecolare.toLocaleString("it-IT")}
            </span>
            <p>Positivi antigenico </p>
            <span className="text-3xl">
            {isToday
                ? todayQuickSwabsPositive.toLocaleString("it-IT")
                : totale_positivi_test_antigenico_rapido.toLocaleString("it-IT")}
            </span>
          </>
        ) : (
          <>
            <div className="h-[250px]">
              <BaseBar
                data={isToday ? dataBar : dataTotalBar}
                keysBar={keysBar}
                layout={"horizontal"}
              />
            </div>
          </>
        )}
      </div>

      {/* component C*/}

      <div className="test-card ">
        <p>Positività</p>
        <span className="text-3xl">{perceptualPositive}%</span>
      </div>
    </div>
  );
};

export default ItalySwabs;
