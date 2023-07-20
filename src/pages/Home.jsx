import React, {useState } from "react";
import { useSelector } from "react-redux";

import moment from "moment/moment";

import LoadingComponent from "../components/LoadingComponent";
import Cases from "../components/Cases";
import UpdateCases from "../components/UpdateCases";
import Hospitalizations from "../components/Hospitalizations";
import Swabs from "../components/Swabs";

const Home = () => {
  const dataItaly = useSelector((state) => state.italy);
  const { loading, italy, error } = dataItaly;
  // console.log(dataItaly);

  // console.log(loading);

  const lastMonth = italy.slice(-30)

  const lastTwoDaysData = italy.slice(-2)

  const day31Ago = italy.slice(-31,-30)
  const lastDayData = lastTwoDaysData[1]

  return (
    <div className=" grid grid-cols-12 gap-4 bg-quaternary/90 dark:bg-dark-primary/80 dark:text-dark-quaternary">
      {/* <h1 className="w-full text-center">Home Page</h1> */}

      {
        loading && <LoadingComponent/>
      }

      {
        !loading && italy[0] ?
        <>
          <h1 className="col-span-12 text-center">Dati aggiornati al {moment(lastDayData.data).format('L')}</h1>

          <Cases lastDayData={lastDayData} />
          
          <UpdateCases lastMonth={lastMonth} day31Ago={day31Ago}/> 
          <Hospitalizations lastMonth={lastMonth}/>
          <Swabs lastMonth={lastMonth}/>
        </>

      : null
      }
    </div>
  );
};

export default Home;
