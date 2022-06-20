import React, {Component} from 'react';
import {SearchbarHeader, SearchForm} from './SearchbarStyles';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        searchTerm: ''
    };


    onInputChange = event => {
        this.setState({searchTerm: event.target.value});
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <SearchbarHeader>
                <SearchForm onSubmit={this.onSubmit}>
                    <button type='submit' className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onInputChange}
                    />
                </SearchForm>
            </SearchbarHeader>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Searchbar;