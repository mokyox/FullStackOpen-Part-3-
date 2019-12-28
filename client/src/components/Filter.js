import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <>
      Filter shown with <input value={value} onChange={onChange}></input>
    </>
  );
};

export default Filter;
