import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { fetchDataRegionsLatest } from '../features/regionsLatest/regionsLatestSlice';
import { fetchDataItaly } from '../features/italy/italySlice';
import { fetchDataRegions } from '../features/regions/regionsSlice';

import SidebarMobile from '../components/SidebarMobile'
import Footer from '../components/Footer'
import { fetchDataProvincesLatest } from '../features/provincesLatest/provincesLatestSlice';
import Sidebar from '../components/Sidebar';
import { TestBar } from '../components/test/TestBar';
import { dataTestBar } from '../components/test/dataTestBar';
import { MyResponsiveBar } from '../components/MyResponsiveBar';

const LayoutPublic = () => {
  const dispatch =  useDispatch()

  useEffect(()=>{
    dispatch(fetchDataRegionsLatest())
    dispatch(fetchDataItaly())
    dispatch(fetchDataRegions())
    dispatch(fetchDataProvincesLatest())
  },[])


  // const data = [
  //   {
  //     "tamponi": "TamponiValue",
  //     "molecolari": 25,
  //     "molecolariColor": "hsl(334, 70%, 50%)",
  //     "antigenici": 36,
  //     "antigeniciColor": "hsl(334, 70%, 50%)",

  //   }
  // ]


  // console.log("rendering");

  return (
    <>
      {/* <div className='h-[800px]'>
        <TestBar data={dataTestBar}/>
      </div> */}
{/* 
      <div className='h-[800px]'>
        <MyResponsiveBar data={data}/>
      </div> */}
    

      <SidebarMobile/>
      <Sidebar/>
    <main className='mt-14 w-full h-full lg:mt-0'>
      <Outlet/>
    </main>
      <Footer/>      
    </>
  )
}

export default LayoutPublic