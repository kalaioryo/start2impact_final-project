import React from 'react'

import Lottie from 'lottie-react'

import astro404 from '../../assets/lotties/astro-404.json'

const LottieAstro404 = () => {

  const style = {
    width: '60%',
    margin: 'auto'
  }

  return (
    <div className="h-full w-full mt-4 pt-16 bg-quaternary/50 dark:bg-dark-primary/90 dark:text-dark-quaternary">
      <div className="w-full m-auto lg:w-2/4">
        <Lottie animationData={astro404} style={style} />
      </div>
    </div>
  )
}

export default LottieAstro404