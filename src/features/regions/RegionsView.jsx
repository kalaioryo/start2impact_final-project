import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchDataRegions } from './regionsSlice'
import LoadingComponent from '../../components/LoadingComponent'
import ErrorComponent from '../../components/ErrorComponent'

const RegionsView = () => {
  const dispatch = useDispatch()
  const dataRegions = useSelector((state) => state.regions)
  const {loading, regions, error} = dataRegions
  // console.log(dataRegions);

  useEffect(() => {
    dispatch(fetchDataRegions())
  }, [])

  if(loading) return <LoadingComponent/>

  if(error) return <ErrorComponent/>

  return (
    <div>
      Ciao
      {/* {
        !loading && regions[0] ? <div>{regions.map(region => <p key={region.id} >{region.denominazione_regione}</p> )}</div>
        : null
      } */}
    </div>
  )
}

export default RegionsView