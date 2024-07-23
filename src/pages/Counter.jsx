import React from "react";
import Button from "../components/Button";
import Body from "../components/Body";
export default function Counter() {
  return (
    <>
      <Body slot={
        <div className="w-full h-screen flex items-center text-center justify-center">
        <div className="">
          <h3 className="text-[30px]">Counter</h3>
          <Button />
        </div>
      </div>
      }/>
    </>
  );
}
