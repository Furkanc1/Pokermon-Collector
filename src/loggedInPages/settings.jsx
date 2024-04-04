import "../components/style.css";
import React, { useContext } from "react";
import ReactSwitch from 'react-switch';
import { ThemeContext } from "../App";

// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import { ThemeContext } from "../App";
// import { setDarkmode, setLightmode } from "../components/Utils/darkmode";

const Settings = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  useContext(ThemeContext)

  return (
    <>
    <div className="landingPageContainer fitScreen">
        <div className="welcomeText">
              <h2><a href="/profile" id="settingsLink">Profile</a></h2>
                <h2><a href="./about" id="settingsLink">About</a></h2> 
              <h2> Theme </h2>
              <ReactSwitch className="toggleThemeBtn" onChange={toggleTheme} checked={theme === "dark"}/>
              <h3><label id="themeText">{theme === "light" ? "Light-Mode" : "Dark-Mode"}</label></h3>
            
        </div>
        </div>
    </>
  );
};

export default Settings;
