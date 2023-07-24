import React from "react";
import PropTypes from 'prop-types';


const SelectTimeRange = ({ text, setTimeRange, timeRange }) => {
  return (
    <div className="col-span-2">
      <button
        className="rounded-lg p-4 m-1 bg-ternary/60 text-primary hover:text-quaternary active:hover:bg-ternary/20 active:hover:text-primary hover:bg-primary/60 
        dark:bg-dark-secondary dark:text-dark-quaternary dark:hover:bg-dark-ternary dark:hover:text-dark-primary dark:active:hover:bg-dark-ternary/20 dark:active:hover:text-dark-quaternary"
        onClick={() => setTimeRange(timeRange)}
      >
        {text}
      </button>
    </div>
  );
  
};

SelectTimeRange.propTypes = {
  text: PropTypes.string.isRequired,
  setTimeRange: PropTypes.func.isRequired,
  timeRange: PropTypes.string.isRequired
}

export default SelectTimeRange;

