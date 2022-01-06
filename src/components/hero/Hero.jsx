/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '../icons';

export default function Hero({
    children, searchQuery, onSearch, onSearchValue,
}) {
    const [search, setSearch] = React.useState('');
    const [isActive, setIsActive] = React.useState(false);
    const Navigate = useNavigate();

    const handleSearch = (e) => {
        const { charCode } = e;

        if (charCode === 13) {
            Navigate(`/search/${search}`);
        }
    };

    const handleChangeValue = (e) => {
        const { value } = e.target;

        if (value === '') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }

        setSearch(value);
    };

    React.useEffect(async () => {
        if (searchQuery) {
            setSearch(searchQuery);
            setIsActive(true);
        }
    }, []);

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
                            placeholder="ex. The Matrix"
                            onInput={onSearchValue ?? handleChangeValue}
                            onKeyPress={onSearch ?? handleSearch}
                            defaultValue={search}
                        />
                        <label
                            htmlFor="heroSearch"
                            id="heroSearchLabel"
                            className={`heroSearchLabel ${isActive ? 'focus' : ''}`}
                        >
                            Search Movies or TV Shows
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
