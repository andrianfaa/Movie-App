/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import { IconSearch } from '../icons';

export default function Hero() {
    return (
        <div className="hero" id="mainContent">
            <div className="container">
                <h1>Movie App</h1>
                <p>List of movies and TV Shows, I, Andrian Fadhilla, have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p>
                <div className="hero-search">
                    <div className="hero-search-input">
                        <IconSearch className="icon" />
                        <input
                            type="search"
                            id="heroSearch"
                            placeholder="eg: Avenger"
                        />
                        <label
                            htmlFor="heroSearch"
                            id="heroSearchLabel"
                        >
                            Search Movies or TV Shows
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
