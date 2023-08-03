import React from "react";
import "./ToolBar.css";
import { useStateContext } from "../../context/Context";


const Toolbar = () => {
  const { handleClick,query,setQuery,handleOptionChange } = useStateContext();


  
  return (
    <div className="toolbar">
      <Dropdown
        options={["Query 1", "Query 2", "Query 3"]}
        onChange={handleOptionChange}
        selectedQuery={query}
      />
      <button onClick={handleClick}>Run SQL</button>
    </div>
  );
};

export const Dropdown = ({ options,selectedQuery,onChange}) => {
  return (
    <select
      name="currency"
      id="currency"
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
};

export default Toolbar;
