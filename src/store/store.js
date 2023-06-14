import { configureStore } from '@reduxjs/toolkit'
// import getDataReducer from '../features/getData/getDataSlice'
import italyReducer from '../features/italy/italySlice'
import regionsReducer from '../features/regions/regionsSlice'

const store = configureStore({
  reducer: {
    // data: getDataReducer,
    italy: italyReducer,
    regions: regionsReducer
  },
})

export default store