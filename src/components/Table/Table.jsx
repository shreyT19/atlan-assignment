import React, { useEffect, useMemo } from "react";
import "./Table.css";
import { useState } from "react";

import Pagination from "../Pagination/Pagination";

const Table = React.memo(({ rows }) => {
  // to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  const[currentSort, setCurrentSort] = useState('')
    

  const memoizedSortValues = useMemo(()=>{
    return rows?.sort((a,b)=>{
      if(a[currentSort] < b[currentSort]){
        return -1
      }
      if(a[currentSort] > b[currentSort]){
        return 1
      }
      return 0
      
    })
   
  },[currentSort,rows])

   // to shows 5 rows per page
   const rowsPerPage = 5;
   // to calculate the index of the last post
   const lastPostIndex = currentPage * rowsPerPage;
   // to calculate the index of the first post
   const firstPostIndex = lastPostIndex - rowsPerPage;
   // to get the current posts
   let currentPosts = memoizedSortValues?.slice(firstPostIndex, lastPostIndex);

  

  return (
    <div>
      <table className="container">
        <thead>
          <tr className="headRow">
            {Object?.keys(currentPosts[0])?.map((keyName, index) => {
              // {Object?.keys(rows[0])?.map((keyName, index) => {
              return (
                <th className="row" key={index} onClick={()=>setCurrentSort(keyName)}>
                  {keyName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((row, index) => {
            // {rows?.map((row, index) => {
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
});

export default Table;
