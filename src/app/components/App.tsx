"use client";
import React, { useContext, useState } from "react";
import { ModeContext, ModeEnum } from "../hooks/context/ModeContext";
import AboutMe from "./AboutMe";
import Inner from "./Inner";
import Version from "./Version";

const App: React.FC = () => {
  const [mode, setMode] = useState(useContext(ModeContext));
  const switchMode = () => {
    setMode(mode === ModeEnum.LIGHT ? ModeEnum.DARK : ModeEnum.LIGHT);
  }
  return (
    <>
      <ModeContext.Provider value={mode}>
        <button onClick={switchMode}>SWITCH</button>
        <AboutMe />
        <Inner />
        <Version />
      </ModeContext.Provider>
    </>
  );
};
export default App;