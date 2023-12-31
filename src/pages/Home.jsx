import React from "react";
import { useSelector } from "react-redux";

import moment from "moment/moment";
import 'moment/locale/it'

import LoadingComponent from "../components/LoadingComponent";
import Cases from "../components/Cases";
import UpdateCases from "../components/UpdateCases";
import Hospitalizations from "../components/Hospitalizations";
import Swabs from "../components/Swabs";
import ErrorComponent from "../components/ErrorComponent";
import { Helmet } from "react-helmet";

const Home = () => {
  const dataItaly = useSelector((state) => state.italy);
  const { loading, italy, error } = dataItaly;

  if (error) return <ErrorComponent error={error} />;

  moment.locale()
  const lastMonth = italy.slice(-30);

  const lastTwoDaysData = italy.slice(-2);

  const day31Ago = italy.slice(-31, -30);
  const lastDayData = lastTwoDaysData[1];

  return (
    <div className="grid grid-cols-12 gap-4 py-8 bg-quaternary/90 dark:bg-dark-primary/90 dark:text-dark-quaternary">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Covid dashboard 2023</title>
          <meta name='description' content='Home'/>
          <link rel="canonical" href="/home" />
      </Helmet>
      {loading && <LoadingComponent />}

      {!loading && italy[0] ? (
        <>
          <h1 className="col-span-9 col-start-3 text-center">
            Dati aggiornati al {moment(lastDayData.data).format("LL")}
          </h1>

          <Cases lastDayData={lastDayData} regionName={false} />

          <UpdateCases lastMonth={lastMonth} day31Ago={day31Ago} />
          <Hospitalizations lastMonth={lastMonth} />
          <Swabs lastMonth={lastMonth} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
