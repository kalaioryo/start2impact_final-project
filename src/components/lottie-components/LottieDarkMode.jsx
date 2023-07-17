import React, { useRef, useState } from "react";

import Lottie from "lottie-react";

import darkModeAnimation from "../../assets/lotties/dark-mode-animation.json";

const LottieDarkMode = () => {
  const [ isDark, setIsDark ] = useState(false)

  const lottieRef = useRef();


  const style = {
    width: "45px",
    margin: "5px 20px 0 0",
    padding: "1px",
    // backgroundColor: 'red'
  };

  const handleClick = () => {
    // setIsDark(!isDark)
    // lottieRef.current.destroy()
    console.log(isDark);
  }

  return (
    <div className="">
      <Lottie
        onClick={handleClick}
        animationData={darkModeAnimation} 
        style={style} 
        lottieRef={lottieRef}
        loop={false}
        
        />
    </div>
  );
};

export default LottieDarkMode;
