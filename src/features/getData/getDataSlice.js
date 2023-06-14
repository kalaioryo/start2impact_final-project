// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   data: [],
//   error: ''
// }

// // export const fetchData = createAsyncThunk('data/fetchData', () => {
// //   return axios
// //     .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
// //     .then(response => response.data)
// // })

// const getDataSlice = createSlice({
//   name: 'data',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(fetchData.pending, state => {
//       state.loading = true
//     })
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//       state.loading = false
//       state.data = action.payload
//       state.error = ''
//     })
//     builder.addCase(fetchData.rejected, (state, action) => {
//       state.loading = false
//       state.data = []
//       state.error = action.error.message
//     })
  
//   }
// })

// export default getDataSlice.reducer