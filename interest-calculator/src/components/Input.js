import Button from "./Button";

export default function Input({
  principal,
  rate,
  year,
  setPrincipal,
  setRate,
  setYear,
  onSubmit,
  onReset,
}) {
  return (
    <form className="input" onSubmit={(e) => onSubmit(e)}>
      <div className="container">
        <label htmlFor="principal">Principal: </label>
        <input
          id="principal"
          type="text"
          placeholder="Principal amount($2000)..."
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>

      <div className="container">
        <label htmlFor="rate">Rate: </label>
        <input
          id="Rate"
          type="text"
          placeholder="Interest rate(10%)..."
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>

      <div className="container">
        <label htmlFor="year">Year: </label>
        <input
          id="year"
          type="text"
          placeholder="Year(3)..."
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </div>
      <Button onReset={onReset} onSubmit={onSubmit} />
    </form>
  );
}
