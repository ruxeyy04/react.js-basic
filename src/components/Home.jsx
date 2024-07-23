import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/about')
  }

  return (
    <>
      <div className="bg-pink-300 h-screen w-full">
        <Header />
        <div className="w-full h-screen flex text-center justify-center">
          <div className="">
            <h3 className="text-[30px]">Home Page</h3>
            <p>About Page</p>
            <button onClick={handleClick} className="border-2 rounded-[10px] p-3 border-red-400 border-solid">Click me</button>
          </div>
        </div>
      </div>
    </>
  );
}
