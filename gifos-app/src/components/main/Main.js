import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import LoadingAnimation from "../../assets/icons/loader-dark.svg";

import "./Main.scss";

export const Main = ({
    results,
    loading,
    noResults,
    showResults
}) => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`main-section-container ${theme === "dark" && "dark-mode-main"}`}>
            <h3 tabIndex="0">{(results?.data?.length > 0 && showResults) && "Resultados de la búsqueda"}</h3>
            <div className={loading || noResults ? "show-content" : "hide-content"}>
                {
                    loading 
                    ? (<object type="image/svg+xml" data={LoadingAnimation}>svg-animation</object>)
                    : (
                        <div className="no-results-wrapper">
                            <p
                                className={`no-results-text ${theme === "dark" && "dark-mode-main"}`}
                                tabIndex="0">
                                    No encontramos resultados para tu búsqueda 😔
                                    <br />
                                    Tal vez la próxima, sea mejor
                            </p>
                            <img src="https://media.giphy.com/media/FEuvG7U6wNYEE/source.gif" alt="sad kitty" />
                        </div>
                    )
                }
            </div>
            <div className="main-section-gifs-wrapper">
                {   
                    showResults && results?.data?.map((gif, i) => (
                        <div className="main-section-gifs-row" key={i} >
                            <a href={gif.images.original.url} target="_blank" rel="noreferrer">
                                <img src={gif.images.original.url} alt={gif.title} tabIndex="0"/>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}