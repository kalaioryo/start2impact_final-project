import React from 'react'
import { useSelector } from 'react-redux'

const DataComponent = () => {
  const dataState = useSelector((state) => state.italy)
  const italy = dataState.italy[0]
  const {
    data,
    stato, 
    ricoverati_con_sintomi, 
    terapia_intensiva,
    totale_ospedalizzati,
    isolamento_domiciliare,
    totale_positivi,
    variazione_totale_positivi,
    nuovi_positivi,
    dimessi_guariti,
    deceduti,
    totale_casi,
    tamponi,
    casi_testati,
    ingressi_terapia_intensiva,
    totale_positivi_test_molecolare,
    totale_positivi_test_antigenico_rapido,
    tamponi_test_molecolare,
    tamponi_test_antigenico_rapido
  } = italy

  return (
    <div className='p-4'>
      <div>
        <p>dati aggiornati a {data}</p>
        <h2>Ricoveri</h2>
        <p>Ricoveri con sintomi: {ricoverati_con_sintomi}</p>
        <p>Terapia intensiva: {terapia_intensiva}</p>
      </div>
      
      
    </div>
  )
}

export default DataComponent