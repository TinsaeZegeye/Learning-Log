export default function Button({ onSubmit, onReset }) {
  return (
    <div className="buttons">
      <button onClick={(e) => onSubmit(e)} className="btn btn-calc">
        Calculate
      </button>
      <button onClick={onReset} className="btn btn-reset">
        Reset
      </button>
    </div>
  );
}
