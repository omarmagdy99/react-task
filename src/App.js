import { useState } from "react";
import Steps from "./steps";
import Count from "./count";
export default function App() {
  let [task, setTask] = useState("count");
  return (
    <div className="App">
      <div className="buttons" style={{ width: "25%" }}>
        <button
          className={`${task === "steps" && "active-btn"}`}
          onClick={() => {
            setTask((task = "steps"));
          }}
        >
          steps
        </button>
        <button
          className={`${task === "count" && "active-btn"}`}
          onClick={() => {
            setTask((task = "count"));
          }}
        >
          count
        </button>
      </div>
      {task === "steps" ? <Steps /> : task === "count" && <Count />}
    </div>
  );
}
