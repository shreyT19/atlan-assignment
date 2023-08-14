import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import "./Pagination.css";
const Pagination = ({
  totalRows,
  currentPage,
  setCurrentPage,
  rowsPerPage,
}) => {
  // let pages = [];
  // to calculate the maximum number of pages
  const maximumPages = Math.ceil(totalRows / rowsPerPage);

  const handlePrevChange = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  

  const handleNextChange = () => {
    setCurrentPage((prev) => {
      if (prev < maximumPages) {
        return prev + 1;
      }
      return prev;
    });
  };
  return (
    <div className="paginationBtns">
      <span
        className="prev"
        onClick={handlePrevChange}
        
        style={currentPage > 1 ? { opacity: 1 } : { opacity: 0.25 }}
      >
        <GrFormPreviousLink className="svg" />
      </span>

      <span
        className="next"
        onClick={handleNextChange}
        
        style={currentPage < maximumPages ? { opacity: 1 } : { opacity: 0.25 }}
      >
        <GrFormNextLink className="svg" />
      </span>
    </div>
  );
};

export default Pagination;
