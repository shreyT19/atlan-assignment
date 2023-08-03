import React, { useState } from "react";
//components
import Table from "../Table/Table";
import Toolbar from "../ToolBar/Toolbar";
//css
import "./CodeCompiler.css";
//data
import dummyData from "../../assets/data.json";

// context api hook for state management
import { useStateContext } from "../../context/Context";

const CodeCompiler = () => {
  const { buttonClicked, currentQuery, setCurrentQuery, currentOutputQuery } =
    useStateContext();
  return (
    <div>
      <p className="output head">Code Compiler</p>
      <div className="flex">
        <div className="code">
          <Toolbar />
          <textarea
            value={currentQuery}
            onChange={(e) => {
              setCurrentQuery(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="questionDataTable">
          <p className="output">Customers</p>
          <Table rows={dummyData?.customers} />
          <p className="output">Orders</p>
          <Table rows={dummyData?.orders} />
        </div>
      </div>
      <div className="outputSection">
        <p className="output">Output</p>
        {buttonClicked && <Table rows={currentOutputQuery} />}
      </div>
    </div>
  );
};

export default CodeCompiler;
