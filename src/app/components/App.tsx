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
          <div className="bg-gradient-to-b to-white from-blue-300 text-slate-800 dark:to-blue-700 dark:from-black dark:text-slate-200">
            <header className="flex justify-end p-2">
              <div
                className={`cursor-pointer rounded-full p-2 bg-black text-white dark:bg-slate-500 mr-1 ${
                  mode === ModeEnum.DARK ? "opacity-50" : ""
                }`}
                onClick={switchMode}
              >
                <Sun />
              </div>
              <div
                className={`cursor-pointer rounded-full p-2 bg-black text-white dark:bg-slate-500 ${
                  mode === ModeEnum.LIGHT ? "opacity-50" : ""
                }`}
                onClick={switchMode}
              >
                <Moon />
              </div>
            </header>
            <AboutMe />
          </div>
          <Version />
        </main>
      </ModeContext.Provider>
    </>
  );
};
export default App;
