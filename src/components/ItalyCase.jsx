import React from 'react'
import { useSelector } from 'react-redux'

const ItalyCase = ({ todayData }) => {

  const { nuovi_positivi , totale_casi } = todayData


  return (
    <div className='p-4 text-center col-span-6 border-4 border-red-800 bg-indigo-200'>
      <h1 className='text-center'>ItalyCase</h1>
      <div>
        <h3>Nuovi Casi: {nuovi_positivi} Totale Casi: {totale_casi.toLocaleString('it-IT')}</h3>

      </div>
    
    </div>
  )
}

export default ItalyCase