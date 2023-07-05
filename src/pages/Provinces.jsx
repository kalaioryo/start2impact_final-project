import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'

import LoadingComponent from '../components/LoadingComponent'
import BasicTable from '../components/BasicTable'

const Provinces = () => {

  const provinces = useSelector(state => state.provincesLatest)

  console.log(provinces);

  const { IsLoading, IsError, provincesLatest} = provinces



  return (
    <>

      {
        IsLoading ? <LoadingComponent/> : null
      }

      {

        !IsLoading && provincesLatest[0] ? 

        <BasicTable dataTable={provincesLatest} />

      : null
      }
    
    </>


    
  )
}

export default Provinces