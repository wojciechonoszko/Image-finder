import React from 'react';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useState } from "react";
import {SearchbarHeader, SearchForm} from './SearchbarStyles';
import PropTypes from 'prop-types';


export default function Searchbar({ onSubmit }) {
    const [inputQuerry, setInputQuerry] = useState("");
    

    const handleInput = e => {
        setInputQuerry(e.currentTarget.value.toLowerCase());
    };
    

    const handleFormSubmit = e => {
        e.preventDefault();
        if (inputQuerry.trim() === "") {
            Notify.failure("Write the correct image name, please", {
                position: "center-center",
                fontSize: "24px",
                timeout: 2500,
                width: "30%",
            });
            return;
        }
        onSubmit(inputQuerry);
        setInputQuerry("");
    };


    return (
        <SearchbarHeader>
            <SearchForm onSubmit={handleFormSubmit}>
                <button type='submit' className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                name="inputQuerry"
                className='SearchForm-input'
                value={inputQuerry}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={handleInput}
                />
                

            </SearchForm>
        </SearchbarHeader>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


