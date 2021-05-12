import React from "react";

import LoadingAnimation from "../../assets/icons/loader-dark.svg";
import NoResultsIllustration from "../../assets/img/pablita-320.png";

import "./Main.scss";

export const Main = ({ results, loading, noResults, theme, showResults }) => {

    return(
        <div className={`main-section-container ${theme==="dark" ? "dark-mode-main" : ""}`}>
            <h3 tabIndex="0">{ results?.data?.length > 0 && showResults ? "Resultados de la búsqueda" : ""}</h3>
            <div className={loading || noResults ? "show-content" : "hide-content"}>
                {
                    loading 
                    ? (<object type="image/svg+xml" data={LoadingAnimation}>svg-animation</object>)
                    : (
                        <div className="no-results-wrapper">
                            <p className="no-results-text" tabIndex="0">{"No encontramos resultados de tu búsqueda :("}</p>
                            <img
                                src={NoResultsIllustration}
                                alt="sin resultados"
                                className="no-results-illustration"
                                tabIndex="0"
                            />
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