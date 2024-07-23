import React from "react";
import Body from "../components/Body";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <>
      <Body
        slot={
          <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Welcome to the React Project</h3>
              <p className="text-lg mb-6">
                This project demonstrates a variety of features built with React. Explore different pages to see the functionalities:
              </p>
              <ul className="text-left mb-6">
                <li className="mb-2"><strong>Counter:</strong> Increment and decrement a simple counter.</li>
                <li className="mb-2"><strong>Calculator:</strong> Perform basic arithmetic operations.</li>
                <li className="mb-2"><strong>PokeAPI:</strong> Search and view details about Pokémon.</li>
              </ul>
              <button
                onClick={handleClick}
                className="bg-red-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-red-600 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        }
      />
    </>
  );
}
