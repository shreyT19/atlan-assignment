import React from "react";
import "./Table.css";
import { useState } from "react";

import { useStateContext } from "../../context/Context";
import Pagination from "../Pagination/Pagination";

const Table = ({ rows }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [rowsPerPage, setRowsPerPage] = useState(3);

  

  const lastPostIndex = currentPage * rowsPerPage;
  const firstPostIndex = lastPostIndex - rowsPerPage;
  const currentPosts = rows.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <table className="container">
        <thead>
          <tr className="headRow">
            {Object?.keys(currentPosts[0])?.map((keyName, index) => {
              return (
                <th className="row" key={index}>
                  {keyName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((row, index) => {
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
      <Pagination
        totalRows={rows?.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
