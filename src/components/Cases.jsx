import React from 'react'
import PropTypes from 'prop-types';

import { BsCardText, BsPieChartFill } from 'react-icons/bs'

const Cases = ({ lastDayData, regionName }) => {

  const { nuovi_positivi, totale_casi } = lastDayData

  return (
    <div className='p-4 text-center col-span-12 lg:col-span-7 lg:col-start-4 border-2 border-primary/50  bg-ternary/50 dark:bg-dark-primary/70 dark:border-dark-ternary/50 rounded-md '>
      <h1 className='text-3xl font-semibold text-center mt-4'>{regionName? regionName : "Italia"}</h1>
      <div>
        <h3 className='text-xl my-4'>Nuovi Casi: </h3>
        <span className='text-3xl font-bold'>{nuovi_positivi.toLocaleString('it-IT')}</span>
        <h3 className='text-xl my-4' >Totale Casi: </h3>
        <span className='text-3xl font-bold'>{totale_casi.toLocaleString('it-IT')}</span>
      </div>

      <div className='flex justify-around mt-4'>
        <div className='flex mr-2'>
          <span className='text-3xl'><BsCardText/></span>
          <span className='pl-4'> clicca per testo</span>
        </div>
        
        <div className='flex'>
          <span className='text-3xl ml-2'><BsPieChartFill/></span>
          <span className='pl-4'>clicca per grafico</span>
        </div>

      </div>
    
    </div>
  )
}

Cases.propTypes = {
  lastDayData: PropTypes.shape({
    nuovi_positivi: PropTypes.number.isRequired,
    totale_casi: PropTypes.number.isRequired
  }),
  regionName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired
}

export default Cases