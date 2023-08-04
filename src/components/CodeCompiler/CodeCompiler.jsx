import React from "react";
//components
import Table from "../Table/Table";
import Toolbar from "../ToolBar/Toolbar";
//css
import "./CodeCompiler.css";
//data
import dummyData from "../../assets/data.json";
import customersData from "../../assets/customers.json";
import ordersData from "../../assets/orders.json";

// context api hook for state management
import { useStateContext } from "../../context/Context";
import EntitySchema from "../EntitySchema/EntitySchema";

const CodeCompiler = () => {
  
  const { buttonClicked, currentQuery, setCurrentQuery, currentOutputQuery, } =
    useStateContext();
    const [error,setError]=React.useState(false);

  return (
    <div className="compiler">
      <div className="logo">
        <p className="output head">Online SQL Editor</p>
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
              e.target.value.includes(';')?setError(false):setError(true);
              setCurrentQuery(e.target.value);
            }}
          ></textarea>
          <div className="outputSection">
            <p className="output">Output</p>
            {error && <p className="error">Please add a semicolon at the end of the query</p>}
            {buttonClicked && <Table rows={currentOutputQuery} />}
            {/* {buttonClicked && <Table rows={customersData} />} */}
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
          {/* <Table rows={ordersData} /> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CodeCompiler;
