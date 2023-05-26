import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ResultText from "./ResultText";
//import { useTheme } from "@mui/material/styles";

export default function RetirementCalculator(): JSX.Element {
  //const theme = useTheme();
  const [annualIncome, setAnnualIncome] = useState<string>("400000");
  const [annualExpenses, setAnnualExpenses] = useState<string>("150000");
  const [currentNetworth, setCurrentNetworth] = useState<string>("100000");
  const [retirenmentAge, setRetirenmentAge] = useState<number>(0);

  useEffect(() => {
    handleChangeRetirenmentAge();
  });

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
    let income : number = parseInt(annualIncome);
    let expenses : number = parseInt(annualExpenses);
    let yearlySavings : number = income - expenses;
    let networth : number = parseInt(currentNetworth);

    //Asset target is when 4% of your networth are equivelant to your yearly expesens / you can use 4% of your networth each year 
    let assetTarget : number = expenses * 25; //2500
    //Unachieved is your assettarget subtracted your current networth 
    let unachieved : number  = assetTarget - networth; //You need a condition if assetTarget < networth

    let yearToRetirenment : number;
    if (unachieved <= 0){
      yearToRetirenment = 0;
    } else {
      yearToRetirenment = Math.round(unachieved / yearlySavings * 10) / 10; 
      //unachieved = assetTarget - networth; //You need a condition if assetTarget < networth
    }
    
    //Because everything is calculated by yearm, we find how many more times/years you need your average yearly savings to reach your asset target 
    //let yearToRetirenment : number = Math.round(unachieved / yearlySavings * 10) / 10; 
    
    console.log("networth " + networth);

    console.log("Asset target " + assetTarget);

    console.log("Unachieved " + unachieved);

    console.log("years to retire " + yearToRetirenment);

    setRetirenmentAge(yearToRetirenment);
  };

  function returnRetirenmentAge(props: number) {
    if (props === 0) {
      return <ResultText beginningText="You can retire now! "></ResultText>;
    }
    if (props > 0) {
      return (
        <ResultText
          beginningText="You can retire in "
          calculation={retirenmentAge}
          endText=" years!"
        ></ResultText>
      );
    } else {
      return (
        <ResultText beginningText="With your current income and expense level, you will never retire"></ResultText>
      );
    }
  }

  return (
    <div className="retirenment-calculator-container">
      <div className="container">
        <div className="row">
          <TextField
            className="input-text-field"
            required
            label="Annual income"
            type="tel"
            onChange={handleChangeIncome}
            value={annualIncome}
            /*color={"primary"}*/
          />
          <TextField
            className="input-text-field"
            required
            label="Annual expenses"
            type="tel"
            onChange={handleChangeExpenses}
            value={annualExpenses}
            color={"error"}
          ></TextField>
          <TextField
            className="input-text-field"
            required
            label="Current Networth"
            type="tel"
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
          <ResultText
            beginningText="To never work again, you need: "
            calculation={(parseInt(annualExpenses) * 25).toLocaleString(
              "da-DK",
              { style: "currency", currency: "DKK" }
            )}
          ></ResultText>
          {returnRetirenmentAge(retirenmentAge)}
          {/*
          <ResultText
            beginningText="You can retire in "
            calculation={retirenmentAge}
            endText=" years!"
          ></ResultText>
          */}
        </div>
      </div>
    </div>
  );
}
