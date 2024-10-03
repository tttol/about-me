import { createContext } from "react";

export enum ModeEnum {
    LIGHT = "light",
    DARK = "dark",
}
export const ModeContext = createContext(ModeEnum.LIGHT);