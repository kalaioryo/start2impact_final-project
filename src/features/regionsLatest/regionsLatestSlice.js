import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  regionsLatest: [],
  error: ''
}

export const fetchDataRegionsLatest = createAsyncThunk('regionsLatest/fetchDataRegionsLatest', () => {
  return axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
  .then(response => response.data)
})

const regionsLatestSlice = createSlice({
  name: 'regionsLatest',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDataRegionsLatest.pending, (state)=>{
      state.loading = true
    })
    builder.addCase(fetchDataRegionsLatest.fulfilled, (state, action) => {
      state.loading = false
      state.regionsLatest = action.payload
      state.error = ''
    })
    builder.addCase(fetchDataRegionsLatest.rejected, (state, action) => {
      state.loading = false
      state.regionsLatest= []
      state.error = action.error.message
    })
  }
})

export default regionsLatestSlice.reducer