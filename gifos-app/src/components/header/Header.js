import React from "react";

import GifosLogo from "../../assets/img/logo-desktop.svg"; 

import "./Header.scss";

export const Header = () => {
    return(
        <div className="header-container">
            <div className="img-wrapper" tabIndex="0">
                <img src={GifosLogo} alt="logo"/>
            </div>
            <button>MODO DARK</button>
        </div>
    )
}