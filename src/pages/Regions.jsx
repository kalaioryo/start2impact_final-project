import React, { useState } from "react";
import { useSelector } from "react-redux"

const Regions = () => {
  // const [ arrayData, setArrayData ] = useState([])
  const {regions} = useSelector(state => state.regions)

  // if(regions.length > 0){

  //   let region = regions.filter( region => region.denominazione_regione === "Piemonte")
  //   // let deceduti = region.filter( region => region.dec)

  //   // region.map(region =>{
  //   //   return console.log("Piemonte", region.data, region.terapia_intensiva)
  //   // });
  //   let array = []
  //   let terapia_intensiva = region.map(region => {
  //     array.push(region.terapia_intensiva)
  //     return array
  //   })

    // console.log(array);
    // setArrayData(array)
    // let example = [1,2,3]
    // console.log(example);
    // setArrayData(terapia_intensiva)

  //   return 
  // }

  return (
    <div>
      <h1 className="w-full  text-center">Regions page</h1>

    </div>
  );
};

export default Regions;
