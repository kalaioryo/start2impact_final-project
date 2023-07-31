import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  regions: [],
  error: ''
}

export const fetchDataRegions = createAsyncThunk('regions/fetchDataRegions', () => {
  return axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
  .then(response => response.data.slice(-32))
})

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDataRegions.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchDataRegions.fulfilled, (state, action) => {
      state.loading = false
      state.regions = action.payload
      state.error = ''
    })
    builder.addCase(fetchDataRegions.rejected, (state, action) => {
      state.loading = false
      state.regions = []
      state.error = action.error.message
    })
  }
})

export default regionsSlice.reducer