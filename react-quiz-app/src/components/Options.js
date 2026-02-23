function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "userAnswer", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
