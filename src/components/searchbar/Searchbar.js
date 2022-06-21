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
                value={inputQuerry}
                type="text"
                autocomplete="off"
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

// class Searchbar extends Component {
//     state = {
//         searchTerm: ''
//     };


//     onInputChange = event => {
//         this.setState({searchTerm: event.target.value});
//     };

//     onSubmit = event => {
//         event.preventDefault();
//         this.props.onSubmit(this.state.searchTerm);
//     };

//     render() {
//         return (
//             <SearchbarHeader>
//                 <SearchForm onSubmit={this.onSubmit}>
//                     <button type='submit' className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>
//                     <input
//                     className="SearchForm-input"
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                     onChange={this.onInputChange}
//                     />
//                 </SearchForm>
//             </SearchbarHeader>
//         );
//     }
// }

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };

// export default Searchbar;