import React from "react";
import Header from "../components/Header";

const BasicCalcu = () => {
  return (
    <>
      <div className="bg-pink-300 h-screen w-full">
        <Header />
        <div className="w-full h-screen flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              id="answer"
              placeholder="0"
              className="w-full mb-4 p-2 text-right border border-gray-300 rounded"
            />
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">9</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">8</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">7</button>
              <button className="bg-yellow-500 p-4 rounded text-xl hover:bg-yellow-600 active:bg-yellow-700">/</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">6</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">5</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">4</button>
              <button className="bg-yellow-500 p-4 rounded text-xl hover:bg-yellow-600 active:bg-yellow-700">*</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">3</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">2</button>
              <button className="bg-gray-200 p-4 rounded text-xl hover:bg-gray-300 active:bg-gray-400">1</button>
              <button className="bg-yellow-500 p-4 rounded text-xl hover:bg-yellow-600 active:bg-yellow-700">-</button>
              <button className="bg-gray-200 p-4 rounded text-xl col-span-2 hover:bg-gray-300 active:bg-gray-400">0</button>
              <button className="bg-yellow-500 p-4 rounded text-xl hover:bg-yellow-600 active:bg-yellow-700">+</button>
              <button className="bg-yellow-500 p-4 rounded text-xl hover:bg-yellow-600 active:bg-yellow-700">%</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicCalcu;
