import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function RetirementCalculator() {
  //const [age, setAge] = useState<string>("");
  const [annualIncome, setAnnualIncome] = useState<string>("");
  const [annualExpenses, setAnnualExpenses] = useState<string>("");
  const [currentNetworth, setCurrentNetworth] = useState<string>("");
  const [retirenmentAge, setRetirenmentAge] = useState<number>(0);

  /*
  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };
  */

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
    //let ageAsNum : number = parseInt(age);
    let income : number = parseInt(annualIncome);
    let expenses : number = parseInt(annualExpenses);
    let yearlySavings : number = income - expenses;
    let networth : number = parseInt(currentNetworth);

    //Asset target is when 4% of your networth are equivelant to your yearly expesens / you can use 4% of your networth each year 
    let assetTarget : number = expenses * 25;
    //Unachieved is your assettarget subtracted your current networth 
    let unachieved : number = assetTarget - networth;
    //Because everything is calculated by yearm, we find how many more times/years you need your average yearly savings to reach your asset target 
    let yearToRetirenment : number = Math.round(unachieved / yearlySavings * 10) / 10; 

    setRetirenmentAge(yearToRetirenment);
  };

  return (
    <div className="retirenment-calculator-container">
      <div className="container">
        <div className="row">
          {/*
          <TextField
            className="input-text-field"
            required
            label="Age"
            title="Test"
            type="number"
            onChange={handleChangeAge}
            value={age}
          />
          */}
          <TextField
            className="input-text-field"
            required
            label="Annual income"
            type="number"
            onChange={handleChangeIncome}
            value={annualIncome}
          />
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
          <Button
            className="calculate-rc"
            variant="contained"
            onClick={() => handleChangeRetirenmentAge()}
          >
            Calculate
          </Button>
          {/*
          <h3>
            With annual expenses of {annualExpenses} you need to have
            approximatly {parseInt(annualExpenses) * 25} worth of assets
          </h3>
         */}
          <h2>You can retire in {retirenmentAge} years!</h2>
        </div>
      </div>
    </div>
  );
}
