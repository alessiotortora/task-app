import { useState } from "react";
import "./App.css";
import Overview from "./components/Overview";

function App() {
  const [test, setTest] = useState(["hello", "i", "alessio"]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event) => {
    setTest([...test, inputValue]);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Overview</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      <Overview list={test} />
    </div>
  );
}

export default App;
