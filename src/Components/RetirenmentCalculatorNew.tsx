import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import ResultText from "./ResultText";
//import { useTheme } from "@mui/material/styles";

export default function RetirementCalculatorNew(): JSX.Element {
  //const theme = useTheme();
  const [annualIncome, setAnnualIncome] = useState<string>("400000");
  const [annualExpenses, setAnnualExpenses] = useState<string>("150000");
  const [currentNetworth, setCurrentNetworth] = useState<string>("100000");
  const [retirenmentAge, setRetirenmentAge] = useState<number>(0);

  const numberWithDots = (num: string) => {
    return parseInt(num).toLocaleString("dk-DA");
  };
  const handleChangeIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
    let numberAsString = event.target.value;
    let formattedNumberAsString = numberWithDots(numberAsString);
    setAnnualIncome(formattedNumberAsString);
    //numberWithDots;
    /*
    const numberAsString = event.target.value;
    const numberAsInt = parseInt(numberAsString);
    const formattedNumberAsString = numberAsInt.toLocaleString("da-DK");
    let income = parseInt(formattedNumberAsString.replace(/\./g, ""));
    setAnnualIncome(formattedNumberAsString);
    */
    /*
    const numberAsString = event.target.value;
    const numberAsInt = parseInt(numberAsString);
    const formattedNumberAsString = numberAsInt.toLocaleString("fi-FI");
    */
    /*
    let num = 10000000;
    let text = num.toLocaleString("da-DK");
    setAnnualIncome(text);
    */
    //setAnnualIncome(event.target.value);
  };

  const handleChangeExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualExpenses(event.target.value);
  };

  const handleChangeNetworth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNetworth(event.target.value);
  };

  //prettier-ignore
  const handleChangeRetirenmentAge = () => {
    /*
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
    */
  };

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
            type="number"
            onChange={handleChangeExpenses}
            value={annualExpenses}
            color={"error"}
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
          <ResultText
            beginningText="You can retire in "
            calculation={retirenmentAge}
            endText=" years!"
          ></ResultText>
        </div>
      </div>
    </div>
  );
}
