/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import { IconSearch } from '../icons';

export default function Hero({ children }) {
    return (
        <div className="hero" id="mainContent">
            <div className="container">
                {children}
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
