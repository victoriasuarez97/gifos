import React from "react";

import "./Main.scss";

export const Main = ({ results, loading }) => {

    return(
        <div className="main-section-container">
            <h3 tabIndex="0">{ results.length > 0 && "Resultados de la búsqueda"}</h3>
            <p>{loading ? "Buscando..." : ""}</p>
            <div className="main-section-gifs-wrapper">
                {   
                    results?.data?.map((gif, i) => (
                        <div key={i}>
                            <img src={gif.images.original.url} alt={gif.title} tabIndex="0"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}