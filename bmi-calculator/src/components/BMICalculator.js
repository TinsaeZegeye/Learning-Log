import Header from "./Header";
import Data from "./Data";
import Status from "./Status";
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  function calculateBMI(e) {
    e.preventDefault();
    if (!weight || !height) return;
    const heightInMeter = height / 100;
    setBmi((weight / (heightInMeter * heightInMeter)).toFixed(2));
  }

  return (
    <div className="container">
      <Header />
      <Data
        onSubmit={calculateBMI}
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
      />
      <Status bmi={bmi} />
    </div>
  );
}
