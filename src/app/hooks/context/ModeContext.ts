import { createContext } from "react";

export const MODE = Object.freeze({
    LIGHT: "light",
    DARK: "dark",
    OS_DEFAULT: "os",
});
export const modeContext = createContext(MODE.LIGHT);