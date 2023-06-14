// import React, { useEffect } from 'react'
// import { fetchData } from './getDataSlice'
// import { useDispatch, useSelector } from 'react-redux'

// const GetDataView = () => {
//   const dispatch = useDispatch()
//   const data = useSelector((state)  => state.data)


//   useEffect(() => {
//     dispatch(fetchData())
//   },[])

//   // if(data.data[0] ? console.log(data.data[0].deceduti) : null )
//   // console.log(data.data[0].deceduti);


//   return (
//     <div>
//       <h2>Data</h2>
//       {data.loading && <div>loading ...</div>}
//       {!data.loading && data.error ? <div>error ...</div> : null}
//       {!data.loading && data.data[0] ? <div> guariti: {data.data[0].deceduti} </div> : null}

//     </div>
//   )
// }

// export default GetDataView