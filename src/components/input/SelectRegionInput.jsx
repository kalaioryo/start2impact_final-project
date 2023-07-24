import React from 'react'
import PropTypes from 'prop-types';


const SelectRegionInput = ({
  regionSelect,
  regions,
  handleChangeRegion,
}) => {
  return (
    <>
      <select
        className='text-black border-2 border-primary/60 dark:bg-dark-ternary/10 dark:text-dark-quaternary dark:border-dark-ternary/40 text-lg p-2 w-full shadow-md rounded-md '
        value={regionSelect}
        name="Regions"
        id="Regions"
        onChange={handleChangeRegion}
      >
        {regions.map((nameRegion) => {
          return (
          <option 
            value={nameRegion}
            key={nameRegion}
            className="first-letter:uppercase bg-quinary text-primary"
          >{nameRegion}
          </option>)
        })}
      </select>
    </>
  );
}

SelectRegionInput.propTypes = {
  regionSelect: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string),
  handleChangeRegion: PropTypes.func,
}

export default SelectRegionInput