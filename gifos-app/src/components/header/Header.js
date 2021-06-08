import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import GifosLogo from "../../assets/img/logo-desktop.svg"; 

import "./Header.scss";

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    const handleTheme = () => {
        return theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return(
        <div className={`header-container ${theme === "dark" && "dark-mode-header"}`}>
            <div className="img-wrapper" tabIndex="0">
                <img src={GifosLogo} alt="logo"/>
            </div>
            <button className={theme === "dark" ? "dark-mode-style" : ""} onClick={handleTheme}>
              {theme === "dark" ? "MODO LIGHT" : "MODO DARK"}
            </button>
        </div>
    )
}