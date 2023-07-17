import React, { useEffect, useRef, useState } from "react";

import Lottie, { useLottieInteractivity } from "lottie-react";

// import darkModeAnimation from "../../assets/lotties/dark-mode-animation.json";

// import darkModeAnimationCountry from "../../assets/lotties/dark-mode-animation-country.json"

import darkModeAnimation from "../../assets/lotties/animation-dark-mode.json"

const LottieDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {

    if (lottieRef.current && !isDark) {
      lottieRef.current.goToAndStop([0], true);
    }

    if (lottieRef.current && isDark) {
      lottieRef.current.goToAndStop([10], true);
    }
  }, [lottieRef]);

  const style = {
    height: "130%",
    width: "130%",

    // margin: "5px 20px 0 0",
    // padding: "1px",
    // backgroundColor: 'red'
  };

  // const handleClick = () => {
  //   setIsDark(!isDark);
  //   if (!isDark) {
  //     lottieRef.current.playSegments([0, 90], true);
  //   } else {
  //     lottieRef.current.playSegments([90, 180], true);
  //   }
  // };

  const handleClick = () => {
    setIsDark(!isDark);
    if (!isDark) {
      // lottieRef.current.setDirection(1);
      lottieRef.current.playSegments([0, 90], true);
    } else {
      lottieRef.current.playSegments([90, 0], true);
    }
  };

  return (
    // <div className="h">
      <Lottie
        onClick={handleClick}
        animationData={darkModeAnimation}
        style={style}
        lottieRef={lottieRef}
        loop={false}
      />
    // </div>
  );
};

export default LottieDarkMode;
