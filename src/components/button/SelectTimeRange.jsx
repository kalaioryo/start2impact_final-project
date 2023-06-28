import React from 'react'

const SelectTimeRange = ({text, setTimeRange, timeRange}) => {


  return (
    <div className='col-span-2'>
      <button className='bg-red-300 p-4 m-1' onClick={() => setTimeRange(timeRange)}>
        {text}
      </button>
    </div>
  )
}

export default SelectTimeRange