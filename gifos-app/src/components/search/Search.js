import React, { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { Main } from "../main/Main";

import illustration from "../../assets/img/ilustra_header.svg";
import SearchIcon from "../../assets/icons/icon-search-mod-noc.svg";

import "./Search.scss";

export const Search = () => {
    const { theme } = useContext(ThemeContext);
    
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [autocompleteResults, setAutocompleteResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const apiSearch = `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=12&offset=0&rating=g&lang=es`;

    const apiAutocomplete = `${process.env.REACT_APP_API_AUTOCOMPLETE}?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=6&offset=0&rating=g&lang=es`;

    useEffect(() => {
        const getSearchResults = async () => {
            setLoading(true);

            fetch(apiSearch)
            .then((response) => 
                response.json())
            .then((data) => 
                setResults(data))
            .catch((error) => 
                console.error(error))
            .finally(() => {
                setLoading(false);
                setNoResults(false);
            })
        }

        const getAutocompleteResults = async () => {
            fetch(apiAutocomplete)
            .then((response) => 
                response.json())
            .then((response) => 
                setAutocompleteResults(response))
            .catch((error) =>
                console.error(error))
        }

        getSearchResults();
        getAutocompleteResults();
    }, [search, apiAutocomplete, apiSearch])

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleApiCall = () => {
        if (!Array.isArray(results)) {
            setNoResults(true);
        } else {
            setShowResults(true);
        }
    }

    const handleSuggestions = (searched) => {
        setSearch(searched);
    }

    return(
        <>
        <div className={`search-section-container ${theme === "dark" && "dark-mode-search"}`}>
            <h1 tabIndex="0">¡Inspirate y buscá los mejores <strong>GIFS</strong>!</h1>
            <img src={illustration} alt="illustration" tabIndex="0"/>
            <div className="search-wrapper">
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
        </div>
        <Main
            results={results}
            loading={loading}
            noResults={noResults}
            showResults={showResults}
        />
    </>
    )
}