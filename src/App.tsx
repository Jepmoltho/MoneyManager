import "./App.css";
import RetirementCalculator from "./Components/RetirementCalculator";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Components/ColorTheme";
import AI from "./Components/AI";
import Accordion from "./Components/Accordion";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const textFieldLightMode = {
    input: { color: "#121212" },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#121212", // Replace "red" with your desired border color
      "&:hover fieldset": {
        borderColor: "#121212", // Replace with your desired border color
      },
    },
  };

  const textFieldDarkMode = {
    input: { color: "#f5f5f5" },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f5f5f5", // Replace "red" with your desired border color
      "&:hover fieldset": {
        borderColor: "#f5f5f5", // Replace with your desired border color
      },
    },
  };

  const [inputTextColor, setInputTextColor] = useState(textFieldDarkMode);

  //prettier-ignore
  useEffect(() => {
    if (darkMode === true){
    document.getElementsByClassName("App")[0].classList.add("light-mode");
    document.getElementsByClassName("App")[0].classList.remove("dark-mode");
    //setInputTextColor({input: { color: "black" }});
    setInputTextColor(textFieldLightMode);
    } else {
      document.getElementsByClassName("App")[0].classList.add("dark-mode");
      document.getElementsByClassName("App")[0].classList.remove("light-mode");
      setInputTextColor(textFieldDarkMode);
    }
  },[darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header" /*style={{ backgroundColor: "brown" }}*/>
          <div className="top-content">
            <Switch
              className={"dark-mode-switch"}
              onClick={() =>
                setDarkMode(!darkMode)
              } /*{...label} defaultChecked*/
            />
            <h1 className="page-title">Personal Finance Calculators</h1>
          </div>
        </header>
        <div className="page-content">
          <Accordion
            /*textcolor={inputTextColor}*/
            fire={<RetirementCalculator textcolor={inputTextColor} />}
            ai={<AI />}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
