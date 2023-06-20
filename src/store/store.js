import { configureStore } from '@reduxjs/toolkit'

import italyReducer from '../features/italy/italySlice'
import regionsReducer from '../features/regions/regionsSlice'
import regionsLatestReducer from '../features/regionsLatest/regionsLatestSlice'
import provincesLatestReducer from '../features/provincesLatest/provincesLatestSlice'

const store = configureStore({
  reducer: {
    italy: italyReducer,
    regions: regionsReducer,
    regionsLatest: regionsLatestReducer,
    provincesLatest: provincesLatestReducer
  },
})

export default store