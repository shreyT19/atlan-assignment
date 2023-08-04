import { createContext, useState, useContext, useEffect } from "react";
export const StateContext = createContext();

//dummy data
import mockData from "../assets/data.json";
import answersData from "../assets/answers.json";

export const AppProvider = ({ children }) => {
  // query is the name of the selected query in the dropdown
  const [query, setQuery] = useState("Query 1");
  // currentQuery is the object of the selected query from the queries array of the mockData
  const [currentQuery, setCurrentQuery] = useState(
    mockData.queries[0]["Query 1"]
  );
  // currentOutputQuery is the object of the selected query from the commands array of the answersData
  const [currentOutputQuery, setCurrentOutputQuery] = useState(
    answersData.commands[0].output
  );
  // buttonClicked is the boolean value to check if the run sql button is clicked or not
  const [buttonClicked, setButtonClicked] = useState(false);



  useEffect(() => {
    const ans = filteredOutputData(currentQuery);

    setCurrentOutputQuery(ans[0]?.output);
  }, [currentQuery]);

  // function to handle the click of the run sql button
  const handleClick = () => {
    setButtonClicked(true);
  };

  // function to handle the change of the dropdown
  const handleOptionChange = (e) => {
    setButtonClicked(false);
    setQuery(e.target.value);

    mockData.queries.map((query) => {
      setCurrentQuery(query[`${e.target.value}`]);
    });
  };

  // function to handle the click of the print all queries
  const handlePrintAllQueries = (heading) => {
    setButtonClicked(false);
    setCurrentQuery(`SELECT * FROM ${heading};`);
  };

  // function to handle the click of the print selected query
  const handlePrintSelectedQuery = (property, heading) => {
    setButtonClicked(false);
    setCurrentQuery(`SELECT ${property} FROM ${heading};`);
  };

  //function to add pagination to the table data if it exceeds 5 rows

  

  return (
    <StateContext.Provider
      value={{
        buttonClicked,
        handleClick,
        query,
        setQuery,
        handleOptionChange,
        currentQuery,
        setCurrentQuery,
        currentOutputQuery,
        setCurrentOutputQuery,
        handlePrintAllQueries,
        handlePrintSelectedQuery,

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// function to filter the output data from the answersData

export const filteredOutputData = (currentQuery) => {
  //trims the white spaces and new lines from the query
  const singleLineQuery = currentQuery?.replace(/\n/g, "");
  const trimmedQuery = singleLineQuery.replace(/\s+/g, "");

  const ans = mockData?.commands?.filter((query) => {
    const singleQuery = query?.command?.replace(/\n/g, "");
    const trimmedSingleQuery = singleQuery.replace(/\s+/g, "");
    if (
      trimmedSingleQuery.toLocaleLowerCase().trim() ===
      trimmedQuery?.toLocaleLowerCase().trim()
    ) {
      return query?.output;
    }
  });

  if (ans.length === 0) {
    return [
      { command: "ERROR", output: [{ Error: "Please check your query" }] },
    ];
  }
  return ans;
};

//custom hook
export const useStateContext = () => useContext(StateContext);
