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
  // showError is the boolean value to check if the error is to be shown or not
  const [showError, setShowError] = useState(false);
  // buttonClicked is the boolean value to check if the run sql button is clicked or not
  const [buttonClicked, setButtonClicked] = useState(false);
  // console.log(currentQuery);

  useEffect(() => {
    const ans = filteredOutputData(currentQuery);
    // console.log(ans[0]?.output);
    setCurrentOutputQuery(ans[0]?.output);
  }, [currentQuery]);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleOptionChange = (e) => {
    setQuery(e.target.value);
    setButtonClicked(false);
    // console.log("changing option to ", e.target.value);
    mockData.queries.map((query) => {
      // console.log(query[`${e.target.value}`]);

      setCurrentQuery(query[`${e.target.value}`]);
    });
  };

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//custom hook

export const useStateContext = () => useContext(StateContext);

// function to filter the output data from the answersData

export const filteredOutputData = (currentQuery) => {
//   console.log(currentQuery);
  const ans = mockData?.commands?.filter((query) => {
    if (
      query?.command?.toLocaleLowerCase().trim() ===
      currentQuery?.toLocaleLowerCase().trim()
    ) {
      return query?.output;
    }
  });

  return ans;
};
