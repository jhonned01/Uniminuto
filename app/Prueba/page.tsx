"use client";
import React, { useState } from "react";

const Prueba = () => {
  const [Items, setItems] = useState([] as any[]);

  return (
    <div>
      <button
        onClick={() => {
          setItems([...Items, {}]);
        }}
        className="flex"
      >
        <span>Add</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {Items?.map((item, index) => {
        return (
          <>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
              <input
                type="text"
                placeholder="ingrese algo"
                onChange={(e) => {
                  const { value } = e.target;
                  setItems((prev) => {
                    const newItems = [...prev];
                    newItems[index] = {
                      ...newItems[index],
                      input: value,
                    };
                    return newItems;
                  });
                }}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="correo"
                onChange={(e) => {
                  const { value } = e.target;
                  setItems((prev) => {
                    const newItems = [...prev];
                    newItems[index] = {
                      ...newItems[index],
                      correo: value,
                    };
                    return newItems;
                  });
                }}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Prueba;
