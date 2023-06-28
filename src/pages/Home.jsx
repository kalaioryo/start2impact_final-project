import React, {useState } from "react";
import { useSelector } from "react-redux";

import moment from "moment/moment";

import LoadingComponent from "../components/LoadingComponent";
import ItalyCase from "../components/ItalyCase";
import ItalyUpdateCases from "../components/ItalyUpdateCases";
import ItalyHospitalizations from "../components/ItalyHospitalizations";
import ItalySwabs from "../components/ItalySwabs";

const Home = () => {
  // const [category, setCategory] = useState("casi_testati");
  const dataItaly = useSelector((state) => state.italy);
  const { loading, italy, error } = dataItaly;

  const lastMonth = italy.slice(-30)
  const lastTwoWeek = lastMonth.slice(-14)

  const lastTwoDaysData = italy.slice(-2)

  const prevDayData = lastTwoDaysData[0]
  const lastDayData = lastTwoDaysData[1]

  return (
    <div className=" grid grid-cols-12 gap-4 bg-quaternary/70">
      {/* <h1 className="w-full text-center">Home Page</h1> */}

      {
        loading && <LoadingComponent/>
      }

      {
        !loading && italy[0] ?
        <>
          <h1 className="col-span-12 text-center">Dati aggiornati al {moment(lastDayData.data).format('L')}</h1>

          <ItalyCase lastDayData={lastDayData} />
          
          <ItalyUpdateCases lastDayData={lastDayData} prevDayData={prevDayData}/> 
          <ItalyHospitalizations lastDayData={lastDayData} prevDayData={prevDayData} lastTwoWeek={lastTwoWeek} lastMonth={lastMonth}/>
          <ItalySwabs lastDayData={lastDayData} prevDayData={prevDayData}/>
        </>

      : null
      }



      
    </div>
  );
};

export default Home;
