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

const LayoutPublic = () => {
  const dispatch =  useDispatch()

  useEffect(()=>{
    dispatch(fetchDataRegionsLatest())
    dispatch(fetchDataItaly())
    dispatch(fetchDataRegions())
    dispatch(fetchDataProvincesLatest())
  },[])

  return (
    <>
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