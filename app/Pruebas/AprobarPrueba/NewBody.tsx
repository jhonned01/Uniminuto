import React from "react";

const NewBody = () => {
  return (
    <div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total preguntas</h2>
            <h3 className="mt-2 text-xl font-bold text-blue-500 text-left">
              + 150.000 ₭
            </h3>
            <p className="text-sm font-semibold text-gray-400">
              Last Transaction
            </p>
            <button className="text-sm mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg  tracking-wider hover:bg-blue-300 outline-none">
              Add to cart
            </button>
          </div>
          <div className="bg-gradient-to-tr from-blue-500 to-blue-400 w-32 h-32  rounded-full shadow-2xl shadow-blue-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-2xl">Basic</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBody;
