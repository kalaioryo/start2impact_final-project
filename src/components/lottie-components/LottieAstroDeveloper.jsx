import React from 'react'

import Lottie from 'lottie-react'

import astroDev from '../../assets/lotties/astro-developer.json'

const LottieAstroDeveloper = () => {

  const style = {
    width: '200px',
    margin: 'auto'
    // backgroundColor: 'red'
  }

  return (
    <div className=''>
      <Lottie animationData={astroDev} style={style} />
    </div>
  )
}

export default LottieAstroDeveloper