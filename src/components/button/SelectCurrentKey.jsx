import React from "react";

const SelectCurrentKey = ({handleClickCurrentKey, text, keyData}) => {
  return (
      <button
        className="bg-red-400 p-4 m-1"
        onClick={() => handleClickCurrentKey([keyData])}
      >
        {text}
      </button>
  );
};

export default SelectCurrentKey;
