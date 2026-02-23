import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <button className="btn timer">
      {minutes < 10 ? "0" : ""}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </button>
  );
}

export default Timer;
