import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  //   function handleStepAdd() {
  //     setStep((s) => s + 1);
  //   }

  //   function handleStepSub() {
  //     if (step > 1) setStep((s) => s - 1);
  //   }

  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }

  function handleStepChange(e){
    setStep(Number(e.target.value));
  }

  function handleCountAdd() {
    setCount((c) => c + step);
  }

  function handleCountSub() {
    setCount((c) => c - step);
  }

  return (
    <div className="container">
      {/* Using Slider to update the step */}
      <div>
        <input type="range" min="1" max="10" onChange={handleStepChange}/>
        <span>{step}</span>
      </div>

      {/* Using Buttons to update the step */}
      {/* <div>
        <button onClick={handleStepSub}>
          <FaMinus />
        </button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={handleStepAdd}>
          <FaPlus />
        </button>
      </div> */}

      <div>
        <button onClick={handleCountSub}>
          <FaMinus />
        </button>

        <input
          type="text"
          placeholder="Number of days..."
          value={count}
          onChange={handleCountChange}
        />

        {/* <p>
          Count: <span>{count}</span>
        </p> */}
        <button onClick={handleCountAdd}>
          <FaPlus />
        </button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} ${Math.abs(count) === 1 ? "day" : "days"} ${count > 0 ? "from today" : "ago"} is `}
        {date.toDateString()}.
      </p>
    </div>
  );
}
