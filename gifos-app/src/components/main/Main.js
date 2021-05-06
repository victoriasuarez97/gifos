import React from "react";

import "./Main.scss";

export const Main = ({ results, loading, noResults }) => {

    return(
        <div className="main-section-container">
            <h3 tabIndex="0">{ results.length > 0 ? "Resultados de la búsqueda" : ""}</h3>
            <p className={loading || noResults ? "text-shown" : "text-hidden"}>
                {loading ? "Buscando..." : "Por favor, ingresá un valor para realizar la búsqueda"}
            </p>
            <div className="main-section-gifs-wrapper">
                {   
                    results?.data?.map((gif, i) => (
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