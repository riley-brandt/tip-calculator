import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const totalTip = bill * tip * 0.01;
  const tipPerPerson = totalTip / people;
  const payPerPerson = (bill + totalTip) / people;

  return (
    <div className="app-container">
      <div>
        <h1>Tip Calculator</h1>
      </div>
      <div className="app">
        <div className="inputs-div">
          <label htmlFor="bill-total">Bill </label>
          <input
            type="number"
            id="bill-total"
            name="bill"
            min="0"
            value={bill}
            onChange={(evt) => setBill(parseInt(evt.target.value))}
          />
          <label htmlFor="tip">Tip % </label>
          <input
            type="number"
            id="tip"
            name="tip"
            min="0"
            value={tip}
            onChange={(evt) => setTip(parseInt(evt.target.value))}
          />
          <label htmlFor="people">No. of People </label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            value={people}
            onChange={(evt) => setPeople(parseInt(evt.target.value))}
          />
        </div>

        <div className="totals">
          <div>
            <span>Tip amount: </span>
            <span className="right-text">${totalTip.toFixed(2)}</span>
          </div>
          {/* <p>Tip per person: ${tipPerPerson.toFixed(2)}</p> */}

          <div>
            <span>Total per person: </span>
            <span className="right-text">${payPerPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
