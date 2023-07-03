import React, { useState } from "react";
import { useSelector } from "react-redux";

import moment from "moment";

import LoadingComponent from "../components/LoadingComponent";
import Cases from "../components/Cases";
import UpdateCases from "../components/UpdateCases";
import Hospitalizations from "../components/Hospitalizations";
import Swabs from "../components/Swabs";
import SelectRegionInput from "../components/input/SelectRegionInput";

const Regions = () => {
  const [currentRegion, setCurrentRegion] = useState("Abruzzo");

  const dataRegions = useSelector((state) => state.regions);
  const { loading, regions, error } = dataRegions;

  const region = regions.filter(
    (region) => region.denominazione_regione === currentRegion
  );

  const lastMonth = region.slice(-30);
  const lastTwoDays = region.slice(-2);
  const prevDayData = lastTwoDays[0];
  const lastDayData = lastTwoDays[1];
  const day31Ago = region.slice(-31, -30);

  const regionsList = [
    "Abruzzo",
    "Basilicata",
    "Calabria",
    "Campania",
    "Emilia-Romagna",
    "Friuli Venezia Giulia",
    "Lazio",
    "Liguria",
    "Lombardia",
    "Marche",
    "Molise",
    "P.A. Bolzano",
    "P.A. Trento",
    "Piemonte",
    "Puglia",
    "Sardegna",
    "Sicilia",
    "Toscana",
    "Umbria",
    "Valle d'Aosta",
    "Veneto",
  ];

  const handleChangeRegion = (e) => {
    setCurrentRegion(e.target.value)
  }

  return (
    <div className=" grid grid-cols-12 md:col-span-11 md:col-start-2 gap-4 bg-quaternary/70">
      {/* <h1 className="w-full  text-center">Regions page</h1> */}

      {loading && <LoadingComponent />}

      {!loading && regions[0] ? (
        <>
          <h1 className="col-span-12 text-center">
            Dati aggiornati al {moment(lastDayData.data).format("L")}
          </h1>

          <div className="col-span-2 col-start-5 md:col-start-6">
            <SelectRegionInput
            regions={regionsList}
            regionSelect={currentRegion}
            handleChangeRegion={handleChangeRegion}
          />
          </div>
          

          <Cases
            lastDayData={lastDayData}
            regionName={lastDayData.denominazione_regione}
          />

          <UpdateCases lastMonth={lastMonth} day31Ago={day31Ago} />
          <Hospitalizations lastMonth={lastMonth} />
          <Swabs lastMonth={lastMonth} />
        </>
      ) : null}
    </div>
  );
};

export default Regions;
