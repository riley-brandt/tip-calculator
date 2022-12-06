import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <label htmlFor="bill-total">Bill Total </label>
      <input type="number" id="bill-total" name="bill" />
      <br />

      <label htmlFor="tip-percent">Tip Percent </label>
      <input type="number" id="tip-percent" name="tip" />
      <br />

      <label htmlFor="people">Number of People </label>
      <input type="number" id="people" name="people" />
    </div>
  );
}

export default App;
