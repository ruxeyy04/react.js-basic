import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <>
      <div className="bg-pink-300 h-screen w-full">
        <Header />
        <div className="w-full h-screen flex text-center justify-center">
          <div className="">
            <h3 className="text-[30px]">About Page</h3>
          </div>
        </div>
      </div>
    </>
  );
}
