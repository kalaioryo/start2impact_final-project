import React from "react";

import PropTypes from 'prop-types';


const SelectCategoryInput = ({
  categorySelect,
  categories,
  handleChangeCategory,
}) => {
  return (
    <>
      <select
        className='text-black border-2 border-primary/60 dark:bg-dark-ternary/10 dark:text-dark-quaternary dark:border-dark-ternary/40 t p-2 w-full shadow-md rounded-md text-lg'
        value={categorySelect}
        name="categories"
        id="categories"
        onChange={handleChangeCategory}
      >
        {categories.map((nameCategory) => {
          return (
          <option 
            value={nameCategory}
            key={nameCategory}
            className="first-letter:uppercase bg-quaternary text-primary dark:bg-dark-primary/90 dark:text-dark-quaternary"
          >{nameCategory.replaceAll("_", " ")}
          </option>)
        })}
      </select>
    </>
  );
};

SelectCategoryInput.propTypes = {
  categorySelect: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  handleChangeCategory: PropTypes.func.isRequired
}

export default SelectCategoryInput;
