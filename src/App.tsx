import { reactLogo } from "./logos";
import "./App.css";
import { headline } from "./Components/Headline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {headline()}
        {/*
        {reactLogo()}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
    </div>
  );
}

export default App;
