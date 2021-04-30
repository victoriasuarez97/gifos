import React, { useState, useEffect } from "react";

import { Main } from "../main/Main";

import illustration from "../../assets/img/ilustra_header.svg";
import SearchIcon from "../../assets/icons/icon-search-mod-noc.svg";

import "./Search.scss";

export const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [call, setCall] = useState(false);
    const [loading, setLoading] = useState(false);

    let api = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=12&offset=0&rating=g&lang=es`);

    useEffect(() => {
        try {
            if (call) {
                api
                .then((response) => (
                    response.json()
                ))
                .then((data) => {
                    setResults(data)
                    setLoading(false);
                });

                setCall(false);
            }
        } catch (error) {
            console.log(error)
        }

    }, [call, search, loading])

    const handleClick = (e) => {
        setSearch(e.target.value)
    }

    const handleApiCall = () => {
        setCall(true);
        setLoading(true);
    }

    return(
        <>
        <div className="search-section-container">
            <h1 tabIndex="0">¡Inspirate y buscá los mejores <strong>GIFS</strong>!</h1>
            <img src={illustration} alt="illustration" tabIndex="0"/>
            <div className="search-section-input">
                <input
                    value={search}
                    type="search"
                    placeholder="Buscar gifs"
                    onChange={handleClick}
                />
                <button onClick={handleApiCall}>
                    <img src={SearchIcon} alt="search"/>
                </button>
            </div>
        </div>
        <Main results={results} loading={loading} />
    </>
    )
}