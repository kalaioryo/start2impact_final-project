import React from 'react';

import {useLottie} from 'lottie-react';

import lego from '../../assets/lotties/Lottie Lego.json';
// https://lottiereact.com/


const AnimationHook = () => {

  const style = {
    height: 300,
  };

  const options = {
    animationData: lego,
    loop: true
  }

  const { View } = useLottie(options, style)

  // console.log(View);

  return (
    <div>
      <div>
        {View}
      </div>
      <p>test</p>
    </div>
  )
}

export default AnimationHook