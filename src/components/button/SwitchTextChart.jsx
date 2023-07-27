import React from 'react'
import PropTypes from 'prop-types'

import { BsCardText, BsPieChartFill } from 'react-icons/bs'

const SwitchTextChart = ({component, switchText, isText}) => {
  return (
    <button className="absolute left-5 top-4 z-10">
          <span
            className="cursor-pointer text-3xl text-primary dark:text-dark-quaternary rounded"
            onClick={() => switchText(component)}
          >
          {isText ?  <BsPieChartFill/> : <BsCardText/>}
          </span>
        </button>
  )
}

SwitchTextChart.propTypes = {
  component: PropTypes.string.isRequired,
  switchText: PropTypes.func.isRequired,
  isText: PropTypes.bool.isRequired
}

export default SwitchTextChart