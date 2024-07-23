import React from "react";
import Body from "../components/Body";

export default function About() {
  return (
    <>
      <Body slot={
        <div className="w-full h-screen flex text-center justify-center items-center">
          <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-[30px] mb-4">About This Project</h3>
            <p className="text-lg mb-4">
              This project is a React application featuring several interactive pages:
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li className="mb-2">
                <strong>Counter:</strong> A simple counter that allows users to increment, decrement, and reset the count.
              </li>
              <li className="mb-2">
                <strong>Calculator:</strong> A basic calculator enabling users to perform arithmetic operations like addition, subtraction, multiplication, and division.
              </li>
              <li className="mb-2">
                <strong>PokeAPI:</strong> A page that fetches and displays information about Pokémon using the PokeAPI. Users can search for Pokémon by name and view detailed stats.
              </li>
            </ul>
            <p className="text-lg">
              This project demonstrates the use of React for building interactive user interfaces, along with state management and API integration.
            </p>
          </div>
        </div>
      } />
    </>
  );
}
