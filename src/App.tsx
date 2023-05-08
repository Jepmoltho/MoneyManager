import "./App.css";
import { headline } from "./Components/Headline";
import RetirementCalculator from "./Components/RetirementCalculator";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Components/ColorTheme";

//import TextField from "@mui/material/TextField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <div>{headline()}</div>
          <RetirementCalculator></RetirementCalculator>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
