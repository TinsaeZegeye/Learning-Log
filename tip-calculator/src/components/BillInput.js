export default function BillInput({ billAmount, onBillChange }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => onBillChange(Number(e.target.value))}
        placeholder="$2000"
      />
    </div>
  );
}