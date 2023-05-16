import React, { useState } from "react";
//import "/App.css";

function Test() {
  const [age, setAge] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [currentNetworth, setCurrentNetworth] = useState("");

  const calculateRetirement = () => {
    // Calculation code here
  };

  return (
    <div className="App">
      <h1>Retirement Calculator</h1>
      <div className="input-container">
        <label htmlFor="age-input">Age:</label>
        <input
          id="age-input"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="income-input">Annual Income:</label>
        <input
          id="income-input"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="expenses-input">Annual Expenses:</label>
        <input
          id="expenses-input"
          type="number"
          value={annualExpenses}
          onChange={(e) => setAnnualExpenses(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="networth-input">Current Networth:</label>
        <input
          id="networth-input"
          type="number"
          value={currentNetworth}
          onChange={(e) => setCurrentNetworth(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={calculateRetirement}>Calculate</button>
      </div>
      <div className="results-container">
        {/* Results will be displayed here */}
      </div>
    </div>
  );
}

export default Test;
