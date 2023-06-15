import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItalyMap from "../components/ItalyMap";
import LoadingComponent from "../components/LoadingComponent";

const Home = () => {
  const [wordClick, setWordClick] = useState("casi_testati");
  const dataRegion = useSelector((state) => state.regionsLatest);
  const { loading, regionsLatest, error } = dataRegion;


  const words = [
    "casi_testati",
    "deceduti",
    "dimessi_guariti",
    "isolamento_domiciliare",
    "ingressi_terapia_intensiva",
    "nuovi_positivi",
    "ricoverati_con_sintomi",
    "tamponi",
    "tamponi_test_antigenico_rapido",
    "tamponi_test_molecolare",
    "terapia_intensiva",
    "totale_casi",
    "totale_ospedalizzati",
    "totale_positivi",
    "totale_positivi_test_antigenico_rapido",
    "totale_positivi_test_molecolare",
    "variazione_totale_positivi",
  ];

  const handleChange = (e) => {
    setWordClick(e.target.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <label className="p-2 mx-2 ">
        <span className="mx-2">Select data:</span>
        <select
          value={wordClick}
          className="p-2 mx2 "
          name="selectWord"
          id="words"
          onChange={handleChange}
        >
          {words.map((word) => {
            return (
              <option
                value={word}
                // selected={optionState === word}
                key={word}
                className="first-letter:uppercase"
              >
                {word.replaceAll("_", " ")}
              </option>
            );
          })}
        </select>
      </label>
      {loading && <LoadingComponent />}
      {!loading && regionsLatest[0] ? <ItalyMap typeData={wordClick} /> : null}

      {/* <div className="flex flex-wrap justify-center">
        {words.map((word) => {
          return (
            <button
              key={word}
              className="p-4 m-2 rounded-md bg-red-500"
              onClick={() => setWordClick(word)}
            >
              {word.replaceAll("_", " ")}
            </button>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home;
