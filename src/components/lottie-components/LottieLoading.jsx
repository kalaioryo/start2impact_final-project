import React, {useRef} from 'react'

import Lottie from 'lottie-react'

import loading from '../../assets/lotties/pulse-heart-beat-loading-animation.json'

const LottieLoading = () => {

  // const lottieRef = useRef()

  const style = {
    width: '200px',
    margin: 'auto'
  }


  return (
    <div className=''>
      <Lottie animationData={loading} style={style} />
    </div>
    
  )
}

export default LottieLoading