import React from "react";
import Button from "./Button";
import Header from "./Header";

export default function Counter() {
  return (
    <>
      <div className="bg-pink-300 h-screen w-full">
        <Header />
        <div className="w-full h-screen flex items-center text-center justify-center">
          <div className="">
            <h3 className="text-[30px]">Counter</h3>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
