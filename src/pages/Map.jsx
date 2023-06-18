import React, {useState} from 'react'

import { useSelector } from "react-redux";
import ItalyMap from "../components/ItalyMap";
import LoadingComponent from "../components/LoadingComponent";


const Map = () => {
  const [category, setCategory] = useState("casi_testati");
  const dataRegion = useSelector((state) => state.regionsLatest);
  const { loading, regionsLatest, error } = dataRegion;

  const categories = [
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
    setCategory(e.target.value);
  };

  return (
    <div>
      <div>
        <h1 className='text-center p-4'>Map Page</h1>
      </div>
      
      <div className='flex justify-center '>
      <label className="p-2 mx-2  bg-ternary text-primary rounded-md ">
        <span className="w-[80%] mx-[10%] ">Select data:</span>
        <select
          value={category}
          className="p-2 w-[80%] mx-[10%]"
          name="selectWord"
          id="categories"
          onChange={handleChange}
        >
          {categories.map((nameCategory) => {
            return (
              <option
                value={nameCategory}
                // selected={optionState === nameCategory}
                key={nameCategory}
                className="first-letter:uppercase bg-quinary text-primary"
              >
                {nameCategory.replaceAll("_", " ")}
              </option>
            );
          })}
        </select>
      </label>
      </div>

      {loading && <LoadingComponent />}
      {!loading && regionsLatest[0] ? <ItalyMap typeData={category} /> : null}

    </div>
  )
}

export default Map