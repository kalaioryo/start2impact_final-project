import React from 'react'

import Lottie from 'lottie-react'

import errorGeneric from '../../assets/lotties/error-generic.json'

const LottieErrorGeneric = () => {

  const style = {
    width: '20%',
    margin: 'auto'
  }

  return (
    <div>
      <Lottie animationData={errorGeneric} style={style} />
    </div>
  )
}

export default LottieErrorGeneric