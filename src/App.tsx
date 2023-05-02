import "./App.css";
import { headline } from "./Components/Headline";
import RetirementCalculator from "./Components/RetirementCalculator";

//import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{headline()}</div>
        <RetirementCalculator></RetirementCalculator>
      </header>
    </div>
  );
}

export default App;
