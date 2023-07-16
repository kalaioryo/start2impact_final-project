import React from "react";

import Lottie from "lottie-react";

import darkModeAnimation from "../../assets/lotties/dark-mode-animation.json";

const LottieDarkMode = () => {
  const style = {
    width: "45px",
    margin: "5px 20px 0 0",
    padding: "1px"
    // backgroundColor: 'red'
  };

  return (
    <div className=''>
      <Lottie animationData={darkModeAnimation} style={style} />
    </div>
  );
};

export default LottieDarkMode;
