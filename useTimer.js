import React, { useRef, useState } from "react";
export const useTimer = function () {
  const timerRef = useRef(0);
  const timeId = useRef(null);
  const [time, setTimer] = useState({
    hour: "00",
    minutes: "00",
    seconds: "00",
  });
  function stopTimer() {
    clearInterval(timeId.current);
    timeId.current = null;
  }

  function startTimer() {
    if (timeId.current) return;
    timeId.current = setInterval(() => {
      timerRef.current = timerRef.current + 1000;
      let timestamp = new Date(timerRef.current);
      const totalSeconds = Math.floor(timerRef.current / 1000);

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const time = {
        hour: hours,
        minutes: minutes,
        seconds: seconds,
      };

      setTimer((prev) => time);
    }, 1000);
  }

  return { time, startTimer, stopTimer };
};
