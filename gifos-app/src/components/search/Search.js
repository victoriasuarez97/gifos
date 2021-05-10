/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Main } from "../main/Main";

import illustration from "../../assets/img/ilustra_header.svg";
import SearchIcon from "../../assets/icons/icon-search-mod-noc.svg";

import "./Search.scss";

export const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [autocompleteResults, setAutocompleteResults] = useState([]);

    const apiSearch = `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=12&offset=0&rating=g&lang=es`;

    const apiAutocomplete = `${process.env.REACT_APP_API_AUTOCOMPLETE}?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=6&offset=0&rating=g&lang=es`;

    useEffect(() => {
        const getSearchResults = () => {
            setLoading(true);

            fetch(apiSearch)
            .then((response) => (
                response.json()
            ))
            .then((data) => {
                setResults(data)
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
                setNoResults(false);
            })
        }

        getSearchResults();
    }, [search])

    useEffect(() => {
        const getAutocompleteResults = () => {
            fetch(apiAutocomplete)
            .then((response) => 
                response.json())
            .then((response) => {
                setAutocompleteResults(response)
            })
            .catch((error) =>
                console.error(error))
        }

        getAutocompleteResults();
    }, [search])

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleApiCall = () => {
        if (search !== "") {
            return;
        } else {
            setNoResults(true);
        }
    }

    const handleSuggestions = (searched) => {
        setSearch(searched);
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
                    onChange={handleInput}
                />
                <button onClick={handleApiCall}>
                    <img src={SearchIcon} alt="search"/>
                </button>
            </div>
            <div className="autocomplete-suggestions-wrapper">
                {
                    autocompleteResults?.data?.map((suggestions, i) =>
                        <div 
                            key={i}
                            className="suggestion"
                            onClick={() => handleSuggestions(suggestions.name)}
                            tabIndex="0">
                                {suggestions.name}
                        </div>
                    )
                }
            </div>
        </div>
        <Main
            results={results}
            loading={loading}
            noResults={noResults}
        />
    </>
    )
}