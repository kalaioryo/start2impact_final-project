import React, { useState } from "react";
import StandardBar from "./chart/StandardBar";
import moment from "moment";
import SwitchTextChart from "./button/SwitchTextChart";

const ItalyHospitalizations = ({ lastDayData, prevDayData, lastWeek }) => {
  const [isText, setIsText] = useState({
    a: false
  });

  // console.log(lastWeek);

  const dataBar = lastWeek.map( Day =>{
    const  arrayHospitalized = {
        id: moment(Day.data).format("MMM D"),
        hospitalized: Day.totale_ospedalizzati,
      }
      return arrayHospitalized
  })
  console.log(dataBar);



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

  const lastHospitalized = ricoverati_con_sintomi - HospitalizedPrevDay
  const lastIsolation = isolamento_domiciliare - isolationPrevDay

  //Data for Chart

  // const dataBar = [
  //   {
  //     id: "H",
  //     hospitalized: lastHospitalized,
  //     isolation: lastIsolation,
  //   },
  // ];

  const keysBar = ["hospitalized", "isolation"];

  const handleClickSwitch = (component) => {
    setIsText({
      ...isText,
      [component]: !isText[component],
    });
  };

  return (
    <div className="relative grid grid-cols-12 col-span-12 lg:col-start-8 lg:col-span-4 xl:col-span-10 xl:col-start-2 gap-4  text-center border-4 border-orange-800">
      

      

      {!isText.a ? (
        // <div className="relative col-span-12  xl:col-span-3 p-4 border-black border-4  bg-ternary/50 text-center">

          <div className="h-[400px] col-span-12">
            <div className="relative">
              <SwitchTextChart
                component={"a"}
                switchText={handleClickSwitch}
                isText={isText.a}
              />
            </div>
            <StandardBar
              data={dataBar}
              keysBar={keysBar}
            />
          {/* </div> */}
        </div>
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
              {( lastHospitalized).toLocaleString(
                "it-IT"
              )}
            </span>
            <p>Totale ricoverati </p>
            <span className="text-3xl">
              {ricoverati_con_sintomi.toLocaleString("it-IT")}
            </span>
          </div>
          <div className="test-card">
            <p>Isolamento domiciliare </p>
            <span className="text-3xl">
              {(lastIsolation).toLocaleString(
                "it-IT"
              )}
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
