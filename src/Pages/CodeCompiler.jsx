import React, { Suspense, lazy,useMemo } from "react";
//components
import Toolbar from "../components/ToolBar/Toolbar";
//css
import "./CodeCompiler.css";
//data
import dummyData from "../assets/data.json";
import customersData from "../assets/customers.json";
// import ordersData from "../assets/orders.json";
import { useStateContext } from "../context/Context";

const EntitySchema = lazy(() =>
  import("../components/EntitySchema/EntitySchema")
);

const Table = lazy(() => import("../components/Table/Table"));

const CodeCompiler = () => {
  const {
    buttonClicked,
    currentQuery,
    setCurrentQuery,
    currentOutputQuery,
    importedData,
  } = useStateContext();
  const [error, setError] = React.useState(false);

  const memoizedEntitySchemas = useMemo(() => {
    console.log("memoizedEntitySchemas");
    return <Suspense fallback={<div>Loading Entity Schema...</div>}>
      <div className="entityModels">
        <EntitySchema heading="Customers" schemaData={dummyData?.orders} />
        <EntitySchema heading="Orders" schemaData={dummyData?.customers} />
      </div>
    </Suspense>
}, [dummyData]);

  const memoizedTableData = useMemo(() => {
    
    return <Suspense fallback={<div>Loading Table Data...</div>}>
      <div className="questionDataTable">
        <div className="flex2">
          <p className="output">Customers</p>
          <Table rows={dummyData?.customers} />
        </div>
        <div className="flex2">
          <p className="output">Orders</p>
          <Table rows={dummyData?.orders} />
        </div>
        {importedData?.length > 0 && (
          <div className="flex2">
            <p className="output">Imported Data</p>
            <Table rows={importedData} />
          </div>
        )}
      </div>
    </Suspense>
}, [dummyData, importedData]);

  return (
    <div className="compiler">
      <div className="logo">
        <p className="output head">Online SQL Editor</p>
      </div>
      <div className="flex">
        {memoizedEntitySchemas}
        <div className="code">
          <Toolbar />
          <textarea
            value={currentQuery}
            onChange={(e) => {
              e.target.value.includes(";") ? setError(false) : setError(true);
              setCurrentQuery(e.target.value);
            }}
          ></textarea>
          <div className="outputSection">
            <p className="output">Output</p>
            {error && (
              <p className="error">
                Please add a semicolon at the end of the query
              </p>
            )}
            {buttonClicked && <Table rows={currentOutputQuery} />}
          </div>
        </div>
        {memoizedTableData}
      </div>
    </div>
  );
};

export default CodeCompiler;
