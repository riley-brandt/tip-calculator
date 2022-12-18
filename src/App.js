import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const totalTip = bill * tip * 0.01;
  // const tipPerPerson = totalTip / people;
  // const payPerPerson = (bill + totalTip) / people;

  let mathTotal = 0;

  if (isNaN(bill)) {
    mathTotal = 0;
  } else if (isNaN(tip)) {
    mathTotal = 0;
  } else if (isNaN(people)) {
    mathTotal = 0;
  } else {
    mathTotal = (bill + totalTip) / people;
  }

  return (
    <div className="app-container">
      <div>
        <h1>Split the Bill</h1>
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

        <div className="title-bottom">
          <h3>Each person pays:</h3>
        </div>

        <div className="totals">
          {/* <div>
            <span>Tip amount: </span>
            <span className="right-text">${totalTip.toFixed(2)}</span>
          </div> */}
          {/* <p>Tip per person: ${tipPerPerson.toFixed(2)}</p> */}

          <div>
            <span className="total-text">${mathTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
