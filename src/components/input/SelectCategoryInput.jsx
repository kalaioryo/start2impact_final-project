import React from "react";

const SelectCategoryInput = ({
  categorySelect,
  categories,
  handleChangeCategory,
}) => {
  return (
    <>
      <select
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
            className="first-letter:uppercase bg-quinary text-primary"
          >{nameCategory}
          </option>)
        })}
      </select>
    </>
  );
};

export default SelectCategoryInput;
