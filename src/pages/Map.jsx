import React, {useState} from 'react'

import { useSelector } from "react-redux";
import ItalyMap from "../components/ItalyMap";
import LoadingComponent from "../components/LoadingComponent";
import SelectCategoryInput from '../components/input/SelectCategoryInput';


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

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className='pt-4 h-full md:mb-24 pb-40 dark:bg-dark-primary/90 dark:text-dark-quaternary'>
      {/* <div>
        <h1 className='text-center p-4'>Map Page</h1>
      </div> */}
      
      <div className='flex justify-center'>
      <label className="p-2 mt-10 mx-2 rounded-md bg-ternary text-primary dark:bg-dark-primary dark:text-dark-ternary">
        <span className="block p-2">Seleziona la categoria:</span>
        <SelectCategoryInput categories={categories} handleChangeCategory={handleChangeCategory} categorySelect={category}/>
      </label>
      </div>

      {loading && <LoadingComponent />}
      {!loading && regionsLatest[0] ? <ItalyMap typeData={category} /> : null}

    </div>
  )
}

export default Map