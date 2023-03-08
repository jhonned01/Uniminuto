"use client";
import React, { useState } from "react";

const Prueba = () => {
  const [saludo, setsetsaludo] = useState("");
  const [show, setshow] = useState(false);

  const mostrarSaludi = () => (
    <div
      className={` ${
        show ? "block" : "hidden"
      } bg-[#000236]/40  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 `}
    >
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-2xl">
        <div className="relative overflow-auto  max-h-screen  py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1>hola</h1>

          <button onClick={() => setshow(false)}>cerrar modal</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {mostrarSaludi()}
      <button
        onClick={(e) => {
          e.preventDefault();

          setshow(!show);
          setsetsaludo("adios");
        }}
      >
        {" "}
        open
      </button>
    </>
  );
};

export default Prueba;
