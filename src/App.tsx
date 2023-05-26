import "./App.css";
import { headline } from "./Components/Headline";
import RetirementCalculator from "./Components/RetirementCalculator";
import RetirementCalculatorNew from "./Components/RetirenmentCalculatorNew";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Components/ColorTheme";
import Test from "./Components/Test";
import AI from "./Components/AI";

//import TextField from "@mui/material/TextField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <div>{headline()}</div>
          <RetirementCalculator></RetirementCalculator>
          <br></br>
          <AI />
          {/*<RetirementCalculatorNew></RetirementCalculatorNew>*/}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
