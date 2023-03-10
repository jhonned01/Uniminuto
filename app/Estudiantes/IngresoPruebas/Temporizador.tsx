import React from "react";
import { useStopwatch } from "react-timer-hook";

const Temporizador = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  return (
    <>
      {" "}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
    </>
  );
};

export default Temporizador;
