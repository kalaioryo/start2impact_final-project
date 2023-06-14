import React, { useEffect } from 'react'
import { fetchDataItaly } from './italySlice'
import { useDispatch, useSelector } from 'react-redux'
import LoadingComponent from '../../components/LoadingComponent'
import ErrorComponent from '../../components/ErrorComponent'
import DataComponent from '../../components/DataComponent'

const ItalyView = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)  => state.italy)

  useEffect(() => {
    dispatch(fetchDataItaly())
  },[])


  const {loading, italy, error} = data

  if(loading) return <LoadingComponent/>

  if(error)  return <ErrorComponent/>

  
  return (
    <div>

      {/* {!loading && <DataComponent italy={italy}/>} */}
      
      {/* {data.loading && <div>loading ...</div>} */}
      {/* {!data.loading && data.error ? <div>error ...</div> : null} */}
      {!data.loading && italy[0] ? <div> deceduti: {italy[0].deceduti} </div> : null}
      {!data.loading && italy[0] ? <DataComponent/> : null}

    </div>
  )
}

export default ItalyView