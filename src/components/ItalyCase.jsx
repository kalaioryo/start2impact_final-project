import React from 'react'
import { useSelector } from 'react-redux'

const ItalyCase = ({ todayData }) => {

  const { nuovi_positivi , totale_casi } = todayData

  return (
    <div className='p-4 text-center col-span-12 lg:col-span-7 lg:col-start-4 border-4 border-red-800 bg-ternary/50 '>
      <h1 className='text-3xl font-semibold text-center'>ItalyCase</h1>
      <div>
        <h3 className='text-xl'>Nuovi Casi: </h3>
        <span className='text-3xl font-bold'>{nuovi_positivi.toLocaleString('it-IT')}</span>
        <h3 className='text-xl'>Totale Casi: </h3>
        <span className='text-3xl font-bold'>{totale_casi.toLocaleString('it-IT')}</span>
      </div>
    
    </div>
  )
}

export default ItalyCase