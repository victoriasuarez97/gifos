import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import poweredByGiphy from "../../assets/img/PoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif"

import "./Footer.scss"

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
    
    return(
        <footer className={theme === "dark" ? "dark-mode-footer" : ""}>
            Made with 💖 by Victoria Suárez
            <img src={poweredByGiphy} alt="powered by Giphy"/>
        </footer>
    )
}