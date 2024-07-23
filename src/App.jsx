import React, { useEffect, useState } from "react";

import Counter from "./components/Counter";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Errorpage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        
        <Route 
        path="*" 
        element={
        <>
          <Error/>
          </>
        } 
        />
      </Routes>
    </>
  );
}
