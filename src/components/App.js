import React, { useState } from "react";
import InputValue from "./InputValue";
import Result from "./Result";

function App() {

  const [results, setResults] = useState({
    taxIncome: "",
    base: "",
    firstCalc: "",
    fedTax: "",
    multiplyAmount: "",
    taxAmount: "",
    total: "",
    hasResult: false
  });

  return (
    <div className="App">

      <div className="container">
        <img src="./assets/points.png" alt="Points.com" className="logo" />
        <h1>Tax Calculator</h1>
        { !results.hasResult &&(
          <InputValue setResults={setResults} />
        )}
      </div>

      { results.hasResult &&(
        <Result results={results} setResults={setResults} />
      )}

  </div>    

  );
}

export default App;
