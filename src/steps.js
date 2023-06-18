import { useState } from "react";

export default function Steps() {
  let Messages = [
    "Learn React 😑",
    "Apply for jobs 😃",
    "Invest your new income 😎",
  ];
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);
  let changeStep = (action) => {
    action === "next"
      ? step < 3 && setStep((s) => s + 1)
      : step > 1 && setStep((s) => step - 1);
  };

  return (
    <div >
      <button className="close" onClick={()=>{setIsOpen(!isOpen)}}>&times;</button>
    {isOpen &&
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 && "active"}`}>1</div>
          <div className={`${step >= 2 && "active"}`}>2</div>
          <div className={`${step >= 3 && "active"}`}> 3</div>
        </div>

        <p className="message">
          Step {step} :{Messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            onClick={() => changeStep("pre")}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={() => changeStep("next")}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
      }

</div>
  );
}

