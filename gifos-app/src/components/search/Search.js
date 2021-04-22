import React from "react";

import illustration from "../../assets/img/ilustra_header.svg";
import SearchIcon from "../../assets/icons/icon-search-mod-noc.svg";

import "./Search.scss";

export const Search = () => {
    return(
        <div className="search-section-container">
            <h1 tabIndex="0">¡Inspirate y buscá los mejores <strong>GIFS</strong>!</h1>
            <img src={illustration} alt="illustration" tabIndex="0"/>
            <div className="search-section-input">
                <input
                    type="search"
                    placeholder="Buscar gifs"
                />
                <button>
                    <img src={SearchIcon} alt="search"/>
                </button>
            </div>
        </div>
    )
}