import "../App.css";
import Header from "./Header";
import DisplayBox from "./DisplayBox";
import Input from "./Input";
import { useEffect, useState } from "react";

export default function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!principal || !rate || !year) return;

    setInterest((interest) => (interest = principal * (rate / 100) * year));
  }

  function handleReset() {
    setPrincipal("");
    setRate("");
    setYear("");
    setInterest(0);
    setResult(0);
  }

  useEffect(() => {
    setResult((result) => (result = interest + principal));
  }, [interest, principal]);

  return (
    <div className="app">
      <Header />
      <DisplayBox result={result} interest={interest} />
      <Input
        rate={rate}
        principal={principal}
        year={year}
        setRate={setRate}
        setPrincipal={setPrincipal}
        setYear={setYear}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
}
