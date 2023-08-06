import React from "react";
import "./EntitySchema.css";

import { RiLayoutFill } from "react-icons/ri";

import { useStateContext } from "../../context/Context";

const EntitySchema = React.memo(({ heading, schemaData }) => {
  const { handlePrintAllQueries, handlePrintSelectedQuery } = useStateContext();

  return (
    <div className="entitySchemaSection">
      <div className="layout">
        <span className="icon">
          <RiLayoutFill />
        </span>
        <span
          className="value heading"
          onClick={() => handlePrintAllQueries(heading)}
        >
          {heading}
        </span>{" "}
        <span>[-]</span>{" "}
      </div>
      <ul>
        {Object.entries(schemaData[0]).map(([key, value], index) => {
          let val;
          if (typeof value === "string") {
            val = "varchar(100)";
          } else if (typeof value === "number") {
            val = "integer";
          }
          return (
            <li className="schemaKeys" key={index}>
              <span className="arrow"></span>
              <span
                onClick={() => handlePrintSelectedQuery(key, heading)}
                className="value"
              >
                {key}
              </span>
              <span className="type">[{val}]</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default EntitySchema;
