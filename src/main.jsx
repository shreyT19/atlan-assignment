import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AppProvider } from "./context/Context.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AppProvider>
      <App />
    </AppProvider>
  
);
