import { useEffect, useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import DisplayData from "./DisplayData";

export default function Input() {
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState({});
  const [to, setTo] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        if (!amount || from === to) return;

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
          { signal: controller.signal },
        );

        if (!res.ok) throw new Error("Something went wrong!");

        const data = await res.json();
        setResult(data);
        console.log(data);
        console.log(data.rates[to]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          console.log(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [amount, from, to]);

  return (
    <div className="input-data">
      <input
        type="text"
        placeholder="$300"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="currency-selector">
        <div className="select">
          <label htmlFor="from">From: </label>

          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
          </select>
        </div>

        <div className="select">
          <label htmlFor="to">To: </label>
          <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>

      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {!isLoading && !error && (
        <DisplayData result={result} to={to} from={from} amount={amount} />
      )}
    </div>
  );
}
