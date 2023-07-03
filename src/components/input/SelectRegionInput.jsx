import React from 'react'

const SelectRegionInput = ({
  regionSelect,
  regions,
  handleChangeRegion,
}) => {
  return (
    <>
      <select
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

export default SelectRegionInput