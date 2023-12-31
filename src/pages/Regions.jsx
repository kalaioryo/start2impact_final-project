import React, { useState } from "react";
import { useSelector } from "react-redux";

import moment from "moment";
import 'moment/locale/it'

import LoadingComponent from "../components/LoadingComponent";
import Cases from "../components/Cases";
import UpdateCases from "../components/UpdateCases";
import Hospitalizations from "../components/Hospitalizations";
import Swabs from "../components/Swabs";
import SelectRegionInput from "../components/input/SelectRegionInput";
import ErrorComponent from "../components/ErrorComponent";
import { Helmet } from "react-helmet";

const Regions = () => {
  const [currentRegion, setCurrentRegion] = useState("Abruzzo");

  const dataRegions = useSelector((state) => state.regions);
  const { loading, regions, error } = dataRegions;

  if (error) return <ErrorComponent error={error} />;

  moment.locale()

  const region = regions.filter(
    (region) => region.denominazione_regione === currentRegion
  );

  const lastMonth = region.slice(-30);
  const lastTwoDays = region.slice(-2);
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
    setCurrentRegion(e.target.value);
  };
 
  return (
    <div className=" grid grid-cols-12 gap-4 py-8 bg-quaternary/70 dark:bg-dark-primary/90 dark:text-dark-quaternary">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Regions - Covid dashboard 2023</title>
          <meta name='description' content='Regions'/>
          <link rel="canonical" href="/regions" />
      </Helmet>
      {loading && <LoadingComponent />}

      {!loading && regions[0] ? (
        <>
          <h1 className="col-span-9 col-start-3 text-center">
            Dati aggiornati al {moment(lastDayData.data).format("LL")}
          </h1>

          <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-5">
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
      ) : null
      }
    </div>
  );
};

export default Regions;
