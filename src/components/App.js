import React, { useState } from "react";
import InputValue from "./InputValue";
import Result from "./Result";

function App() {

  const [results, setResults] = useState({});

  let year = new Date();
  year = year.getFullYear();

  return (
    <div className="App">

      <div className="container">
        <h1>Canada Tax Calculator</h1>
        { !results.hasResult &&(
          <InputValue setResults={setResults} />
        )}
      </div>

      { results.hasResult &&(
        <Result results={results} setResults={setResults} />
      )}
      <br></br>
      <cite>Lucas Sacheto - {year}</cite>

  </div>    
  
  );
}

export default App;
