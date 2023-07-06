import { useState } from "react";
import Steps from "./steps";
import Count from "./count";
import Profile from "./Profile";
import Tip from "./tip-calc"
export default function App() {
  let [task, setTask] = useState("tip");
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

        <button
          className={`${task === "profile" && "active-btn"}`}
          onClick={() => {
            setTask((task = "profile"));
          }}
        >
          profile
        </button>
        <button
          className={`${task === "tip" && "active-btn"}`}
          onClick={() => {
            setTask((task = "tip"));
          }}
        >
          tip
        </button>
      </div>
      {task === "steps" && <Steps />}
      {task === "count" && <Count />}
      {task === "profile" && <Profile />}
      {task === "tip" && <Tip />}
    </div>
  );
}
