import { useEffect, useState } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  function handleStart() {
    setIsActive(true);
    setIsPaused(false);
  }

  function handlePauseResume() {
    setIsPaused((paused) => !paused);
  }

  function handleReset() {
    setIsActive(false);
    setTime(0);
  }

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        onStart={handleStart}
        onPauseResume={handlePauseResume}
        onReset={handleReset}
        active={isActive}
        paused={isPaused}
      />
    </div>
  );
}
