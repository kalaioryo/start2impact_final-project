import React from 'react'

import Lottie from 'lottie-react'

import astroDev from '../../assets/lotties/astro-developer.json'

const LottieAstroDeveloper = () => {

  const style = {
    width: '250px',
    margin: 'auto',
  }

  return (
    <div className='bg-dark-quaternary/10'>
      <Lottie className='fill-blue-500' animationData={astroDev} style={style}/>
    </div>
  )
}

export default LottieAstroDeveloper