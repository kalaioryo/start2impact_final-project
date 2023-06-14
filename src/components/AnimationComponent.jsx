import React, { useRef } from 'react'

import Lottie from 'lottie-react';

// import Kiss from '../../assets/lotties/kiss-of-the-heart.json'
import walk from '../../assets/lotties/walking-outside.json'


const AnimationComponent = () => {

  const lottieRef = useRef()


  const handleClick = () => {
    lottieRef.current.destroy()
  }

  const handleMouseLeave = () => {
    lottieRef.current.setDirection(1)
    lottieRef.current.play()

  }

  const handleMouseEnter = () => {
    lottieRef.current.setDirection(-1)
  } 


  const style = {
    width: '200px',
    // backgroundColor: 'blue'
  }

  return (
    <div>
      <Lottie onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} lottieRef={lottieRef} animationData={walk} loop={true}  style={style}/>
    </div>
  )
}

export default AnimationComponent