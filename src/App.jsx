import React, { Suspense } from "react";
import CodeCompiler from "./Pages/CodeCompiler";

function App() {
  return (
    <>
      <CodeCompiler />
      <Suspense fallback={<div>Loading Footer...</div>}>

      <footer></footer>
      </Suspense>
    </>
  );
}

export default App;
