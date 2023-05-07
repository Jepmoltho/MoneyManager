import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function RetirementCalculator() {
  const [age, setAge] = useState<string>("");
  const [annualIncome, setAnnualIncome] = useState<string>("");
  const [annualExpenses, setAnnualExpenses] = useState<string>("");
  const [currentNetworth, setCurrentNetworth] = useState<string>("");
  const [retirenmentAge, setRetirenmentAge] = useState<number>(0);

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleChangeIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualIncome(event.target.value);
  };

  const handleChangeExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualExpenses(event.target.value);
  };

  const handleChangeNetworth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNetworth(event.target.value);
  };

  //prettier-ignore
  const handleChangeRetirenmentAge = () => {
    let ageAsNum : number = parseInt(age);
    let incomeAsNum : number = parseInt(annualIncome);
    let expenseAsNum : number = parseInt(annualExpenses);
    let networthAsNum : number = parseInt(currentNetworth);

    let assetTarget : number = (expenseAsNum / 4) * 100;
    let unachieved : number = assetTarget - networthAsNum;

    let yearToRetirenment : number = Math.round(unachieved / incomeAsNum * 100) / 100; 

    setRetirenmentAge(yearToRetirenment);
  };

  return (
    <div className="retirenment-calculator-container">
      <div className="container">
        <div className="row">
          <TextField
            className="input-text-field"
            required
            label="Age"
            title="Test"
            type="number"
            onChange={handleChangeAge}
            value={age}
          />
          <TextField
            className="input-text-field"
            required
            label="Annual income"
            type="number"
            onChange={handleChangeIncome}
            value={annualIncome}
          />
        </div>
        <div className="row">
          <TextField
            className="input-text-field"
            required
            label="Annual expenses"
            type="number"
            onChange={handleChangeExpenses}
            value={annualExpenses}
          ></TextField>
          <TextField
            className="input-text-field"
            required
            label="Current Networth"
            type="number"
            onChange={handleChangeNetworth}
            value={currentNetworth}
          ></TextField>
        </div>
        <div className="retirenmentAge">
          <button onClick={() => handleChangeRetirenmentAge()}>
            Press me sempai
          </button>
          <h2>You can retire in {retirenmentAge} years!</h2>
        </div>
      </div>
    </div>
  );
}
