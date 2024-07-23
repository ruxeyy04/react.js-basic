import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? "text-blue-500 font-bold" : "text-black";
  };

  return (
    <div className="bg-[#eee] p-[30px]">
      <ul className="flex justify-between w-[50%] mx-auto my-0 text-[20px]">
        <Link to="/">
          <li className={`cursor-pointer ${getLinkStyle("/")}`}>Home</li>
        </Link>
        <Link to="/counter">
          <li className={`cursor-pointer ${getLinkStyle("/counter")}`}>Counter</li>
        </Link>
        <Link to="/about">
          <li className={`cursor-pointer ${getLinkStyle("/about")}`}>About</li>
        </Link>
      </ul>
    </div>
  );
}
