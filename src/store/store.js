import { configureStore } from '@reduxjs/toolkit'
// import getDataReducer from '../features/getData/getDataSlice'
import italyReducer from '../features/italy/italySlice'
import regionsReducer from '../features/regions/regionsSlice'
import regionsLatestReducer from '../features/regionsLatest/regionsLatestSlice'

const store = configureStore({
  reducer: {
    // data: getDataReducer,
    italy: italyReducer,
    regions: regionsReducer,
    regionsLatest: regionsLatestReducer
  },
})

export default store