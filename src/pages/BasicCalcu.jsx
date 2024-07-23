import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
const BasicCalcu = () => {
  const [result, setResult] = useState("");
  const handleClear = () => {
    setResult("");
  };
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <Body
        slot={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              
              <input
                type="text"
                id="answer"
                value={result}
                placeholder="Basic Calculator"
                className="w-full mb-4 p-2 text-right border border-gray-300 rounded"
                readOnly
              />
              <div className="grid grid-cols-4 gap-2">
                {[
                  "9",
                  "8",
                  "7",
                  "/",
                  "6",
                  "5",
                  "4",
                  "*",
                  "3",
                  "2",
                  "1",
                  "-",
                  "0",
                  ".",
                  "+",
                  "%",

                  "Clear",
                  "=",
                ].map((char) => (
                  <button
                    key={char}
                    value={char}
                    className={`bg-${
                      char.match(/[0-9.]/)
                        ? "gray-200"
                        : char.match(/[C]/)
                        ? "red-500"
                        : "yellow-500"
                    } p-4 rounded text-xl hover:bg-${
                      char.match(/[0-9.]/)
                        ? "gray-300"
                        : char.match(/[C]/)
                        ? "red-600"
                        : "yellow-600"
                    } active:bg-${
                      char.match(/[0-9.]/)
                        ? "gray-400"
                        : char.match(/[C]/)
                        ? "red-700"
                        : "yellow-700"
                    }
                ${char.match(/[Clear=]/) ? "col-span-2" : ""}
                  `}
                    onClick={
                      char === "Clear"
                        ? handleClear
                        : char == "="
                        ? calculate
                        : clickHandler
                    }
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default BasicCalcu;
