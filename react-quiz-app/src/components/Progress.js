function Progress({ index, numQuestions, points, maxPossiblePoint, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <div>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoint}
        </p>
      </div>
    </div>
  );
}

export default Progress;
