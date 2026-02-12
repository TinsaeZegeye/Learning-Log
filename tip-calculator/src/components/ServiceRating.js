export default function ServiceRating({ rating, onRatingChange }) {
  return (
    <div>
      <p>How did you like the service?</p>
      <select
        value={rating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Excellent (20%)</option>
      </select>
    </div>
  );
}