import React, {useContext } from "react";
import { ThemeContext } from "./ThemeProvider";





const ThemeSwitch = () => {
    const { mode, setTheme } = useContext(ThemeContext);
    return (
        <div>
        <button onClick={setTheme}>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        </div>
    );
};

export default ThemeSwitch;
