"use client";
import React, { useContext, useState } from "react";
import { ModeContext, ModeEnum } from "../hooks/context/ModeContext";
import { Moon, Sun } from "../icons";
import AboutMe from "./AboutMe";
import Version from "./Version";

const App: React.FC = () => {
  // const mode = useContext(ModeContext);
  const [mode, setMode] = useState(useContext(ModeContext));
  const switchMode = () => {
    setMode(mode === ModeEnum.LIGHT ? ModeEnum.DARK : ModeEnum.LIGHT);
  };
  return (
    <>
      <ModeContext.Provider value={mode}>
        <main className={mode === ModeEnum.DARK ? "dark" : ""}>
          <div className="bg-gradient-to-b dark:to-purple-900 dark:from-black dark:text-slate-100">
            <header className="flex">
              <div>Toru Takahashi</div>
              <div className="cursor-pointer" onClick={switchMode}>
                {mode === ModeEnum.DARK && <Sun />}
                {mode === ModeEnum.LIGHT && <Moon />}
              </div>
            </header>
            <AboutMe />
          </div>
          <p>Mode is {mode}</p>
          <Version />
        </main>
        {/* <button onClick={switchMode}>SWITCH</button> */}
      </ModeContext.Provider>
    </>
  );
};
export default App;
