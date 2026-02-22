export default function DisplayBox({ result, interest }) {
  return (
    <div className="display">
      <h3>$ {interest > 0 ? interest : ""}</h3>
      <p>total amount of money: ${result > 0 ? result : ""}</p>
    </div>
  );
}
