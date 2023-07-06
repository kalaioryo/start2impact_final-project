import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'

import LoadingComponent from '../components/LoadingComponent'
import BasicTable from '../components/BasicTable'

const Provinces = () => {

  const provinces = useSelector(state => state.provincesLatest)

  console.log(provinces);

  const { IsLoading, IsError, provincesLatest} = provinces

  const dataTable = provincesLatest.map((province) => {
    const provinceObject = {
      denominazione_regione: province.denominazione_regione,
      denominazione_provincia: province.denominazione_provincia.replace("/", " "),
      totale_casi: province.totale_casi.toLocaleString('it-IT')
    }
    return provinceObject
  })

  const columnsData = [
    // {
    //   Header: "Regione",
    //   accessor: "denominazione_regione"
    // },
    {
      Header: "Provincia",
      accessor: "denominazione_provincia"
    },
    {
      Header: "Totale casi",
      accessor: "totale_casi"
    },
  ]



  return (
    <>

      {
        IsLoading ? <LoadingComponent/> : null
      }

      {

        !IsLoading && provincesLatest[0] ? 
        <div className='grid grid-cols-12 bg-quaternary/60'>
        <h1 className="col-span-12 py-6 text-3xl text-center">Province</h1>
          <BasicTable dataTable={dataTable} columnsData={columnsData}/>
        </div>

        

      : null
      }
    
    </>


    
  )
}

export default Provinces