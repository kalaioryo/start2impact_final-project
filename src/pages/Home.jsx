import React, { useEffect, useState } from "react";
import { fetchDataRegions } from "../features/regions/regionsSlice";
import { useDispatch, useSelector } from "react-redux";
import ItalyMap from "../components/ItalyMap";

const Home = () => {
  const [wordClick, setWordClick] = useState("deceduti");
  const dispatch = useDispatch();
  const dataRegion = useSelector((state) => state.regions);
  const { loading, regions, error } = dataRegion;

  useEffect(() => {
    dispatch(fetchDataRegions());
  }, []);
  const words = [
    "deceduti",
    "tamponi",
    "dimessi_guariti",
    "isolamento_domiciliare",
    "casi_testati",
    "ingressi_terapia_intensiva",
    "nuovi_positivi",
    "ricoverati_con_sintomi",
    "tamponi_test_antigenico_rapido",
    "tamponi_test_molecolare",
    "terapia_intensiva",
    "totale_casi",
    "totale_ospedalizzati",
    "totale_positivi",
    "totale_positivi_test_antigenico_rapido",
    "totale_positivi_test_molecolare",
    "variazione_totale_positivi"
  ];

  return (
    <div>
      <h1>Home</h1>
      {!loading && regions[0] ? <ItalyMap typeData={wordClick} /> : null}
      <div className="flex flex-wrap justify-center">
        {words.map((word) => {
          return (
            <button
              key={word}
              className="p-4 m-2 rounded-md bg-red-500"
              onClick={() => setWordClick(word)}
            >
              {word.replace('_', ' ')}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
