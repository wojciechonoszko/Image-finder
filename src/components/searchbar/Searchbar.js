import React from 'react';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useState } from "react";
import { SearchbarHeader, SearchForm } from './SearchbarStyles';
import PropTypes from 'prop-types';
import axios from 'axios';

function SuggestionList({ suggestions, onSuggestionClick }) {
    return (
        <ul className='SuggestionList'>
            {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => onSuggestionClick(suggestion)}>
                    {suggestion}
                </li>
            ))}
        </ul>
    );
}

export default function Searchbar({ onSubmit }) {
    const [inputQuery, setInputQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = async (value) => {
        try {
            const response = await axios.get(
                `https://api.datamuse.com/sug?s=${value}`
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const handleInput = async (e) => {
        const value = e.currentTarget.value.toLowerCase();
        setInputQuery(value);
        const suggestions = await getSuggestions(value);
        setSuggestions(suggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputQuery(suggestion);
        setSuggestions([]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputQuery.trim() === "") {
            Notify.failure("Write the correct image name, please", {
                position: "center-center",
                fontSize: "24px",
                timeout: 2500,
                width: "30%",
            });
            return;
        }
        onSubmit(inputQuery);
        setInputQuery("");
        setSuggestions([]);
    };

    return (
        <SearchbarHeader>
            <SearchForm onSubmit={handleFormSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                    name="inputQuery"
                    className="SearchForm-input"
                    value={inputQuery}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInput}
                />
            </SearchForm>
            <div className="suggestions-frame">
                {suggestions.length > 0 && (
                    <SuggestionList
                        suggestions={suggestions.map((suggestion) => suggestion.word)}
                        onSuggestionClick={handleSuggestionClick}
                    />
                )}
            </div>
        </SearchbarHeader>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
