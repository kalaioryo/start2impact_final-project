import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  italy: [],
  error: ''
}

export const fetchDataItaly = createAsyncThunk('italy/fetchDataItaly', () => {
  return axios
    .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
    .then(response => response.data)
})

const italySlice = createSlice({
  name: 'italy',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchDataItaly.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchDataItaly.fulfilled, (state, action) => {
      state.loading = false
      state.italy = action.payload
      state.error = ''
    })
    builder.addCase(fetchDataItaly.rejected, (state, action) => {
      state.loading = false
      state.italy = []
      state.error = action.error.message
    })
  
  }
})

export default italySlice.reducer