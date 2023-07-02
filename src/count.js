import { useState } from "react";

export default function Count() {
  let [variance, setVar] = useState(1);
  let [dateChange, setDateChange] = useState(1);
  let date = new Date("june 21 2027");
  date.setDate(date.getDate() + dateChange);
  function changeFunction(changeState, realState) {
    let changeDateInput = document.querySelector(".change-date-input");
    let changeVarInput = document.querySelector(".change-var-input");
    realState === "var"
      ? changeState == "plus"
        ? (setVar(() => variance + 1), changeVarInput.value = variance)
        : (setVar(() => variance - 1), changeVarInput.value = variance)
      : realState === "data" && changeState == "plus"
        ? (setDateChange(() => dateChange + variance), changeDateInput.value = dateChange)
        : (setDateChange(() => dateChange - variance), changeDateInput.value = dateChange)

  }


  return (
    <div className="count">
      <p className="message">variance</p>
      <p className="message">{variance}</p>
      <input type="range" className="change-var-input" defaultValue={variance} onChange={(e) => { setVar(Number(e.target.value)) }} />
      <div className="buttons">
        <button
          className="active-btn"
          onClick={() => {
            changeFunction("minus", "var");
          }}
        >
          minus
        </button>

        <button
          className="active-btn"
          onClick={() => {
            changeFunction("plus", "var");
          }}
        >
          Plus
        </button>
      </div>
      <p className="message">change Date</p>
      <input type="number" className="change-date-input" defaultValue={`${dateChange}`} onChange={(e) => { setDateChange(Number(e.target.value)) }} />
      <div className="buttons" style={{ margin: "10px 0" }}>
        <button
          className="active-btn"
          onClick={() => {
            changeFunction("minus", "data");
          }}
        >
          minus
        </button>
        <button
          className="active-btn"
          onClick={() => {
            changeFunction("plus", "data");
          }}
        >
          Plus
        </button>
      </div>
      <p className="message">{date.toDateString()}</p>
    </div>
  );
}
