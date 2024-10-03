"use client";
import React, { useContext, useState } from "react";
import { ModeContext, ModeEnum } from "../hooks/context/ModeContext";
import Inner from "./Inner";

const App: React.FC = () => {
  const [mode, setMode] = useState(useContext(ModeContext));
  const switchMode = () => {
    setMode(mode === ModeEnum.LIGHT ? ModeEnum.DARK : ModeEnum.LIGHT);
  }
  return (
    <>
      <ModeContext.Provider value={mode}>
        <h2>Hello App</h2>
        <button onClick={switchMode}>SWITCH</button>
        <Inner />
      </ModeContext.Provider>
    </>
  );
};
export default App;