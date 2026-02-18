export default function Data({
  onSubmit,
  weight,
  height,
  setHeight,
  setWeight,
}) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="input-group">
        <label for="weight">Weight in Kg: </label>
        <input
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          id="weight"
          type="text"
          placeholder="Eg. 80"
        />
      </div>

      <div className="input-group">
        <label for="height">Height in Cm: </label>
        <input
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          id="height"
          type="text"
          placeholder="Eg. 160"
        />
      </div>

      <button onClick={(e) => onSubmit(e)}>Calculate</button>
    </form>
  );
}
