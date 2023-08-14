import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = ({ data, setFiltered }) => {
  const [search, setSearch] = useState("");
  const [optionValue, setOptionValue] = useState("");


  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOptionChange = (e) => {
    setOptionValue(e.target.value);
  };

  useEffect(() => {
    const filteredData = data?.filter((searchQuery) => {
      if (!optionValue) {
        return true;
      }

      const val = searchQuery[optionValue];

      if (typeof val === "number") {
        return val.toString().includes(search);
      } else {
        return val.toLowerCase().includes(search.toLowerCase());
      }
    });

    setFiltered(filteredData);
  }, [search, optionValue]);

  return (
    <div className="selectSearch">
      <select name="" id="" value={optionValue} onChange={handleOptionChange}>
        <option value="">Select</option>
        {Object.keys(data[0])?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <input placeholder={`Search ${optionValue ? `in ${optionValue}` : ''}`} type="text" className="inputSearch" value={search} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
