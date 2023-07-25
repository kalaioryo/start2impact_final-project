import React from "react";

import Lottie from "lottie-react";

import errorNetwork from "../../assets/lotties/error-network.json";

const LottiesErrorNetwork = () => {
  const style = {
    width: "80%",
    margin: "auto",
  };

  return (
    <div className="h-full w-full pt-16 bg-quaternary/50 dark:bg-dark-primary/90 dark:text-dark-quaternary">
      <div className="w-full m-auto lg:w-2/4">
        <p className="text-center text-3xl mt-14">
          Ti preghiamo di controllare la tua connessione
        </p>
        <Lottie animationData={errorNetwork} style={style} />
      </div>
    </div>
  );
};

export default LottiesErrorNetwork;
