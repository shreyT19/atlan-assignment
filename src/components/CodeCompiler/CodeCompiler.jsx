import React from "react";
//components
import Table from "../Table/Table";
import Toolbar from "../ToolBar/Toolbar";
//css
import "./CodeCompiler.css";
//data
import dummyData from "../../assets/data.json";
// import customersData from "../../assets/customers.json";
// import ordersData from "../../assets/orders.json";

// context api hook for state management
import { useStateContext } from "../../context/Context";
import EntitySchema from "../EntitySchema/EntitySchema";

const CodeCompiler = () => {
  const { buttonClicked, currentQuery, setCurrentQuery, currentOutputQuery } =
    useStateContext();

  return (
    <div className="compiler">
      <div className="logo">
        <p className="output head">Code Editor</p>
      </div>
      <div className="flex">
        <div className="entityModels">
          <EntitySchema heading="Customers" schemaData={dummyData?.orders} />

          <EntitySchema heading="Orders" schemaData={dummyData?.customers} />
        </div>
        <div className="code">
          <Toolbar />
          <textarea
            value={currentQuery}
            onChange={(e) => {
              setCurrentQuery(e.target.value);
            }}
          ></textarea>

          <div className="outputSection">
            <p className="output">Output</p>
            {buttonClicked && <Table rows={currentOutputQuery} />}
          </div>
        </div>
        <div className="questionDataTable">
          <div className="flex2">
            <p className="output">Customers</p>
            <Table rows={dummyData?.customers} />
            {/* <Table rows={customersData} /> */}
          </div>
          <div className="flex2">
            <p className="output">Orders</p>
            <Table rows={dummyData?.orders} />
          </div>
          {/* <Table rows={ordersData} /> */}
        </div>
      </div>
    </div>
  );
};

export default CodeCompiler;
