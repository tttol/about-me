import { useContext } from "react";
import { ModeContext } from "../hooks/context/ModeContext";

const Inner: React.FC = () => {
    const mode = useContext(ModeContext);
    return(
        <p>Mode is {mode}</p>
    );
}
export default Inner;