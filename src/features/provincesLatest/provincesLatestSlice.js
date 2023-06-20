import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  provincesLatest: [],
  error: ''
}

export const fetchDataProvincesLatest = createAsyncThunk('provinces/fetchDataProvincesLatest', () => {
  return axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
  .then( response => response.data)
})

const provincesLatestSlice = createSlice({
  name: 'provincesLatest',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDataProvincesLatest.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchDataProvincesLatest.fulfilled, (state, action) => {
      state.loading = false
      state.provincesLatest = action.payload
      state.error = ''
    })
    builder.addCase(fetchDataProvincesLatest.rejected, (state, action) => {
      state.loading = false
      state.provincesLatest = []
      state.error = ''
    })
  }
})

export default provincesLatestSlice.reducer