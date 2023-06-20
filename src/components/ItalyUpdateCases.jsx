import React from 'react'

const ItalyUpdateCases = ({ todayData, yesterdayData }) => {
  const dead = todayData.deceduti
  const deadYesterday = yesterdayData.deceduti

  const healed = todayData.dimessi_guariti
  const healedYesterday = yesterdayData.dimessi_guariti

  const { variazione_totale_positivi, totale_positivi} = todayData

  return (
    <div className='grid grid-cols-6 col-span-6 gap-4  text-center border-4 border-orange-800 '>
      
      <h1 className='p-4 col-span-6 border-black border-4  bg-indigo-200 text-center'>ItalyUpdateCases</h1>
      
      <div className="col-span-6 md:col-span-2 p-4 border-black border-4  bg-orange-200">Morti {dead - deadYesterday}</div>
      <div className="col-span-6 md:col-span-2 p-4 border-black border-4 bg-orange-200">Guariti {healed - healedYesterday}</div>
      <div className="col-span-6 md:col-span-2 p-4 border-black border-4 bg-orange-200">
        <p>Variazione positivi {variazione_totale_positivi}</p>
        <p>totale positivi {totale_positivi}</p>
      </div>
    
    </div>
  )
}

export default ItalyUpdateCases