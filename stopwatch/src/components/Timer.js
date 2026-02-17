export default function Timer({ time }) {
  const hours = Math.floor((time / 3600000) % 24);
  const minutes = Math.floor((time / 60000) % 20);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time / 10) % 100);

  return (
    <div className="timer">
      <span className="digits">{("0" + hours).slice(-2)}:</span>
      <span className="digits">
        {hours === 24 ? "00" : ("0" + minutes).slice(-2)}:
      </span>
      <span className="digits">
        {hours === 24 ? "00" : ("0" + seconds).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {hours === 24 ? "00" : ("0" + milliseconds).slice(-2)}
      </span>
      {hours === 24 && <p>Maximum Count Amount.</p>}
    </div>
  );
}
