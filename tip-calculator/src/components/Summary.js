export default function Summary({ billAmount, tipAmount, totalAmount }) {
  return (
    <footer>
      You pay ${totalAmount.toFixed(2)} (
      ${billAmount.toFixed(2)} bill + ${tipAmount.toFixed(2)} tip)
    </footer>
  );
}