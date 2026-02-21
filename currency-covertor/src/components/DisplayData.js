export default function DisplayData({ result, to, from, amount }) {
  const sameCurr = to === from;

  if (!result || !result.rates) {
    return (
      <div className="converted">
        <p>Converted value goes over here</p>
      </div>
    );
  }

  return (
    <div className="converted">
      <p>
        {sameCurr
          ? `${amount} ${from} is ${amount} ${to}`
          : `${result.amount} ${result.base} is ${result.rates[to]?.toFixed(2)} ${to} on ${result.date}`}
      </p>
    </div>
  );
}
