import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";
import {theme} from './theme';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';



const getStyle = (mode) => {
    return {
      btn: {
        color: theme[mode].color
      },
    };
  };


const ThemeSwitch = () => {
    const { mode, setTheme } = useContext(ThemeContext);
    const styles = getStyle(mode);
    return (
        <div className="switch">
        <button onClick={setTheme} style={styles.btn}>
            {mode === "light" ? <BsFillMoonFill/> : <BsFillSunFill/>}
        </button>
        </div>
    );
};

export default ThemeSwitch;
