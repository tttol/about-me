import { createContext } from "react";

export enum ModeEnum {
  LIGHT = "light",
  DARK = "dark",
}

const getPreferredColor = () => {
  // https://developer.mozilla.org/ja/docs/Web/API/Window/matchMedia
  const isLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (isLight) {
    return ModeEnum.LIGHT;
  } else {
    return ModeEnum.DARK;
  }
};

export const ModeContext = createContext(getPreferredColor());
