import { React, useState, useEffect } from "react";
import "./index.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(100);
  const [startTimer, setStartTimer] = useState(true);

  const toggleTimer = () => {
    setStartTimer(!startTimer);
  };

  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!startTimer || seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer, seconds]);

  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value" id="timer-value">
        {seconds}
      </div>
      <button className="large" data-testid="stop-button" onClick={toggleTimer}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
