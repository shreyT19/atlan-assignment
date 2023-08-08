import React from "react";

const Dropdown = React.memo(({ options, selectedQuery, onChange }) => {
  return (
    <select
      name="query"
      id="query"
      value={selectedQuery}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
});

export default Dropdown;
