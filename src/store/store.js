import { configureStore } from '@reduxjs/toolkit'

import italyReducer from '../features/italy/italySlice'
import regionsReducer from '../features/regions/regionsSlice'
import regionsLatestReducer from '../features/regionsLatest/regionsLatestSlice'

const store = configureStore({
  reducer: {
    italy: italyReducer,
    regions: regionsReducer,
    regionsLatest: regionsLatestReducer
  },
})

export default store