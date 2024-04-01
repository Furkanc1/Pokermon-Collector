import React, { useState } from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
import "../components/style.css";
// import { ThemeContext } from "../App";
// import { setDarkmode, setLightmode } from "../components/Utils/darkmode";

const Settings = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ))
  }
  return (
    <>
    <div className="landingPageContainer">
        <div className="welcomeText">
              <h2> Theme </h2>
              <button onClick={toggleTheme} checked={ theme === "dark"}>Toggle</button>
              <h2><a href="/profile" id="profileLink">Profile</a></h2>
            
        </div>
        </div>
    </>
  );
};

export default Settings;
