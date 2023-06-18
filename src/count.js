import { useState } from "react";

export default function Count() {
  let [variance, setVar] = useState(1);
  let [dateChange, setDateChange] = useState(1);
  let date = new Date("june 21 2027");
  date.setDate(date.getDate() + dateChange);
  function changeFunction(changeState, realState) {
    realState === "var"
      ? changeState == "plus"
        ? setVar(() => variance + 1)
        : setVar(() => variance - 1)
      : realState === "data" && changeState == "plus"
      ? setDateChange(() => dateChange + variance)
      : setDateChange(() => dateChange - variance);
  }
  return (
    <div className="count">
      <p className="message">variance</p>
      <p className="message">{variance}</p>
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
      <p className="message">{dateChange}</p>
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
