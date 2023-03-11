import React from "react";

const Prueba = () => {
  return (
    <div className="mt-2 p-5 w-40  bg-white rounded-lg shadow-xl">
      <div className="flex">
        <select
          name="hours"
          className="w-40 text-center bg-transparent text-xl appearance-none outline-none"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <span className=" text-xl mr-3">:</span>
        <select
          name="minutes"
          className="w-40 text-center bg-transparent text-xl appearance-none outline-none mr-4"
        >
          <option value={0}>00</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={45}>45</option>
        </select>
      </div>
    </div>
  );
};

export default Prueba;
