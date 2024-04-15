import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";

function secondsToTime(secs: number) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  return {
    m: minutes,
    s: seconds,
  };
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const savedTime = localStorage.getItem("timeLeft");
    if (savedTime) {
      setTimeLeft(parseInt(savedTime, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft.toString());
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const { m, s } = secondsToTime(timeLeft);

  return (
    <Typography
      variant="h4"
      sx={{
        display: "flex",
        width: "5vw",
        justifyContent: "center",
        color: "red",
        border: "1px solid rgb(53, 104, 117)",
      }}
    >
      {m}:{s < 10 ? "0" : ""}
      {s}
    </Typography>
  );
};

export default CountdownTimer;
