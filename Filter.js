// src/components/Filter.js
import React from 'react';

const Filter = ({ handleFilter }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    handleFilter(name, value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        onChange={handleChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="Filter by rate"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
