import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchDataRegionsLatest } from "../features/regionsLatest/regionsLatestSlice";
import { fetchDataItaly } from "../features/italy/italySlice";
import { fetchDataRegions } from "../features/regions/regionsSlice";

import SidebarMobile from "../components/SidebarMobile";
import Footer from "../components/Footer";
import { fetchDataProvincesLatest } from "../features/provincesLatest/provincesLatestSlice";
import Sidebar from "../components/Sidebar";
import LoadingComponent from "../components/LoadingComponent";

const LayoutPublic = () => {
  const { loading } = useSelector((state) => state.italy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRegionsLatest());
    dispatch(fetchDataItaly());
    dispatch(fetchDataRegions());
    dispatch(fetchDataProvincesLatest());
  }, []);


  return (
    <div className="flex flex-col justify-evenly">
      <SidebarMobile />
      <Sidebar />
      <main className="mt-14 w-full h-full md:mt-0 sm:mb-14">
        { loading ? (
          <div className="mt-14 w-full h-[73vh] lg:mt-0" >
            <p className="mt-32 text-2xl text-center">caricamento dei dati corso</p>
            <LoadingComponent />
          </div>
        ) : (
          
            <Outlet />
        
          
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
