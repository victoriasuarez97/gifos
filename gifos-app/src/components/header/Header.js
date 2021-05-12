import React from "react";

import GifosLogo from "../../assets/img/logo-desktop.svg"; 

import "./Header.scss";

export const Header = ({ theme, setTheme }) => {
    const handleTheme = () => {
        if (theme==="light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return(
        <div className="header-container">
            <div className="img-wrapper" tabIndex="0">
                <img src={GifosLogo} alt="logo"/>
            </div>
            <button className={theme==="dark" ? "dark-mode-style" : ""} onClick={handleTheme}>
              {theme==="dark" ? `MODO LIGHT` : `MODO DARK`}
            </button>
        </div>
    )
}