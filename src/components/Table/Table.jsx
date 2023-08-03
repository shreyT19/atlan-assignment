import React from "react";
import "./Table.css";

const Table = ({ rows }) => {
  // console.log(rows);
  return (
    <table className="container">
      <thead>
        <tr className="headRow">
          {Object.keys(rows[0]).map((keyName) => {
            return (
              <th className="row" key={keyName}>
                {keyName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          return (
            <tr key={index}>
              {Object.values(row).map((val, index) => {
                return <td key={index}>{val}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
