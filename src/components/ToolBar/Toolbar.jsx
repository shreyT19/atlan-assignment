import React from "react";
import "./ToolBar.css";
import { useStateContext } from "../../context/Context";
import { CSVLink } from "react-csv";

import {BiExport} from 'react-icons/bi'

const Toolbar = () => {
  const { handleClick,query,handleOptionChange,currentOutputQuery,buttonClicked } = useStateContext();
  const csvHeaders = Object.keys(currentOutputQuery[0]);
  const csvData = currentOutputQuery?.map((row)=>Object.values(row));

  
  return (
    <div className="toolbar">
      <Dropdown
        options={["Query 1", "Query 2", "Query 3","Query 4"]}
        onChange={handleOptionChange}
        selectedQuery={query}
      />
      <div className="buttons">
      
      {buttonClicked && <CSVLink className="csv-button" data={csvData} headers={csvHeaders} filename={"data.csv"}>
      <button className="export"><span><BiExport/></span>Export</button >
      </CSVLink>}
      <button onClick={handleClick}>Run SQL</button>
      </div>
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
