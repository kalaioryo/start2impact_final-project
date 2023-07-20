import React from 'react'
import { useSelector } from 'react-redux'

import LoadingComponent from '../components/LoadingComponent'
import BasicTable from '../components/BasicTable'

const Provinces = () => {

  const provinces = useSelector(state => state.provincesLatest)
  const { IsLoading, IsError, provincesLatest} = provinces

  const dataTable = provincesLatest.map((province) => {
    const provinceObject = {
      denominazione_provincia: province.denominazione_provincia.replace("/", " "),
      totale_casi: province.totale_casi.toLocaleString('it-IT')
    }
    return provinceObject
  })

  const columnsData = [
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
    <div className=''>

      {
        IsLoading ? <LoadingComponent/> : null
      }

      {

        !IsLoading && provincesLatest[0] ? 
        <div className='py-8 grid grid-cols-12 md:col-span-10 md:col-start-2 bg-quaternary/60 dark:bg-dark-primary/90'>
        <h1 className="col-span-12 py-6 text-3xl text-center dark:text-dark-quaternary">Province</h1>
          <BasicTable dataTable={dataTable} columnsData={columnsData}/>
        </div>

        

      : null
      }
    
    </div>


    
  )
}

export default Provinces