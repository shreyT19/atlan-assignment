import React from "react";
import "./Table.css";

const Table = ({ rows }) => {
  return (
    <table className="container">
      <thead>
        <tr className="headRow">
          {Object?.keys(rows[0])?.map((keyName, index) => {
            return (
              <th className="row" key={index}>
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
              {Object?.values(row)?.map((val, index) => {
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
