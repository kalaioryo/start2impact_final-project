import React from 'react'
import { GiOpenBook } from 'react-icons/gi'
import { BsCardText } from 'react-icons/bs'
import { BsPieChartFill } from 'react-icons/bs'

const SwitchTextChart = ({component, switchText, isText}) => {
  return (
    <button className="absolute right-5 top-4 z-10">
          <span
            className="cursor-pointer text-3xl text-primary rounded"
            onClick={() => switchText(component)}
          >
          {isText ?  <BsPieChartFill/> : <BsCardText/>}
          </span>
        </button>
  )
}

export default SwitchTextChart