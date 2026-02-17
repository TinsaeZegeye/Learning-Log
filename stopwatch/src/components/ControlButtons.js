export default function ControlButtons({
  active,
  paused,
  onStart,
  onPauseResume,
  onReset,
}) {
  return (
    <div className="control-buttons">
      {active ? (
        <div className="btn-grp">
          <div className="btn btn-two" onClick={onReset}>
            Reset
          </div>

          <div className="btn btn-one" onClick={onPauseResume}>
            {paused ? "Resume" : "Pause"}
          </div>
        </div>
      ) : (
        <div className="btn btn-one btn-start" onClick={onStart}>
          start
        </div>
      )}
    </div>
  );
}
