"use client";
import React, { useState, useEffect } from "react";

const Temporizador = () => {
  const [time, setTime] = useState(7200); // 120 minutos en segundos
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (isActive && time > 0 && !isFinished) {
      intervalId = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time, isFinished]);

  useEffect(() => {
    const alertId = setTimeout(() => {
      setIsActive(true);
      alert("Tienes 120 minutos para responder la prueba.");
    }, 0);

    return () => clearTimeout(alertId);
  }, []);

  useEffect(() => {
    if (isFinished) {
      const tiempoRealizado = 7200 - time;
      const horas = Math.floor(tiempoRealizado / 3600);
      const minutos = Math.floor((tiempoRealizado - horas * 3600) / 60);
      const segundos = tiempoRealizado % 60;
      alert(
        `Gracias por presentar la prueba. El tiempo transcurrido fue de: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`
      );
      setIsActive(false);
    }
  }, [isFinished, time]);

  const horas = Math.floor(time / 3600);
  const minutos = Math.floor((time - horas * 3600) / 60);
  const segundos = time % 60;

  const handleTerminarPrueba = () => {
    setIsFinished(true);
    setTiempoTranscurrido(7200 - time);
  };

  return (
    <>
      <div className="w-full">
        {horas < 10 ? `0${horas}` : horas}:
        {minutos < 10 ? `0${minutos}` : minutos}:
        {segundos < 10 ? `0${segundos}` : segundos}{" "}
        <button
          className="rounded-md border px-1 py-0 border-slate-300 hover:border-indigo-300   hover:shadow-inner focus:outline-none transition duration-500 ease-in-out text-white transform hover:-translate-x hover:scale-105"
          onClick={handleTerminarPrueba}
          title="Terminar Prueba"
        >
          Fin Test
        </button>
      </div>
    </>
  );
};

export default Temporizador;
