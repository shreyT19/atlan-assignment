import React, { Suspense, lazy, useMemo } from "react";
//components
import Toolbar from "../components/ToolBar/Toolbar";
//css
import "./CodeCompiler.css";
//data
import dummyData from "../assets/data.json";
import customersData from "../assets/customers.json";
// import ordersData from "../assets/orders.json";
import { useStateContext } from "../context/Context";
import Search from "../components/Search/Search";

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
    setFilteredSearchCustomers,
    setFilteredSearchOrders,
    filteredSearchCustomers,
    filteredSearchOrders,
    filteredOutputQueryData,
    setFilteredOutputQueryData,
  } = useStateContext();

  const memoizedEntitySchemas = useMemo(() => {
    return (
      <Suspense fallback={<div>Loading Entity Schema...</div>}>
        <div className="entityModels">
          <EntitySchema heading="Customers" schemaData={dummyData?.orders} />
          <EntitySchema heading="Orders" schemaData={dummyData?.customers} />
        </div>
      </Suspense>
    );
  }, [dummyData?.customers, dummyData?.orders]);
  const [error, setError] = React.useState(false);


  const memoizedTableData = useMemo(() => {
    return (
      <Suspense fallback={<div>Loading Table Data...</div>}>
        <div className="questionDataTable">
          <div className="flex2">
            <p className="output">Customers</p>
            <Search
              data={dummyData?.customers}
              setFiltered={setFilteredSearchCustomers}
            />
            {/* <Table rows={dummyData?.customers} /> */}
            <Table
              rows={
                filteredSearchCustomers.length > 0
                  ? filteredSearchCustomers
                  : dummyData?.customers
              }
            />
          </div>
          <div className="flex2">
            <p className="output">Orders</p>
            <Search
              data={dummyData?.orders}
              setFiltered={setFilteredSearchOrders}
            />
            {/* <Table rows={dummyData?.orders} /> */}
            <Table
              rows={
                filteredSearchOrders.length > 0
                  ? filteredSearchOrders
                  : dummyData?.orders
              }
            />
          </div>
          {importedData?.length > 0 && (
            <div className="flex2">
              <p className="output">Imported Data</p>
              <Table rows={importedData} />
            </div>
          )}
        </div>
      </Suspense>
    );
  }, [dummyData, importedData, filteredSearchCustomers, filteredSearchOrders]);

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
            {buttonClicked && (
              <div>
                <Search
                  data={currentOutputQuery}
                  setFiltered={setFilteredOutputQueryData}
                />
                <Table rows={filteredOutputQueryData.length>0?filteredOutputQueryData:currentOutputQuery} />
              </div>
            )}
          </div>
        </div>
        {memoizedTableData}
      </div>
    </div>
  );
};

export default CodeCompiler;
