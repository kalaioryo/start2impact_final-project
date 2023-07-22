import React from "react";

const SelectCurrentKey = ({handleClickCurrentKey, text, keyData}) => {
  return (
      <button
        className="p-4 m-1 rounded-md bg-ternary/60 text-primary hover:text-quaternary active:hover:bg-ternary/20 active:hover:text-primary hover:bg-primary/60 
        dark:bg-dark-secondary dark:text-dark-quaternary dark:hover:bg-dark-ternary dark:hover:text-dark-primary dark:active:hover:bg-dark-ternary/20 dark:active:hover:text-dark-quaternary"
        onClick={() => handleClickCurrentKey([keyData])}
      >
        {text}
      </button>
  );
};

export default SelectCurrentKey;
