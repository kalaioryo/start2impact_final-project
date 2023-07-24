import React, { useEffect, useRef } from "react";
import PropTypes, { oneOfType } from 'prop-types';

import Lottie from "lottie-react";

import darModeAnimation from "../../assets/lotties/dark-mode-animation.json"

const LottieDarkMode = ({ theme }) => {
  const lottieRef = useRef();

  useEffect(() => {

    if(theme && theme === 'dark') {
      lottieRef.current.playSegments([60, 100], true);
    }
    else{
      lottieRef.current.playSegments([100, 60], true);
    }

  }, [theme])


  const style = {
    height: "130%",
  };

  if(lottieRef.current && theme === "dark") {
      lottieRef.current.goToAndStop([1], true)
      }
  if(lottieRef.current && theme === "light") {
    lottieRef.current.goToAndStop([0], true)
      }

  return (

    <Lottie
      animationData={darModeAnimation}
      style={style}
      lottieRef={lottieRef}
      loop={false}
    />

  );
};

LottieDarkMode.propTypes = {
  theme: oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

export default LottieDarkMode;
