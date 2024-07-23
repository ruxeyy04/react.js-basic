import React from "react";
import { useState } from "react";
export default function Button() {
  
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick} className="bg-transparent text-[20px] rounded-[5px] py-[10px] px-[40px] border border-gray-500 mt-[10px] transition duration-300 ease-in-out transform hover:bg-gray-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 active:scale-95">
            {count}
        </button>
    );
}
