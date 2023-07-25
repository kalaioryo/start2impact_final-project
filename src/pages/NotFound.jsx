import React from 'react'

import { useRouteError, Link } from 'react-router-dom'

import LottieAstro404 from '../components/lottie-components/LottieAstro404'
import Sidebar from '../components/Sidebar'
import SidebarMobile from '../components/SidebarMobile'
import Footer from '../components/Footer'

const NotFound = () => {

  const error = useRouteError()

  return (
    <div className="h-full w-full mt-[-60px] pt-4 bg-quaternary/50 dark:bg-dark-primary/90 dark:text-dark-quaternary">
      <Sidebar/>
      <SidebarMobile/>

      <h1 className="w-full mt-14 text-center p-12 text-3xl">Pagina non trovata</h1>
      
      <Link to={"/"} className='text-center block text-3xl border rounded-md w-60 m-auto link'>Torna alla home</Link>
      <LottieAstro404/>
      <Footer/>
    </div>
  )
}

export default NotFound