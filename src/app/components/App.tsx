"use client";
import React from "react";
import { MODE } from "../hooks/context/ModeContext";

const App: React.FC = () => {
  console.log(MODE.DARK);
  return (
    <>
      <h2>Hello App</h2>
    </>
  );
};

export default App;
