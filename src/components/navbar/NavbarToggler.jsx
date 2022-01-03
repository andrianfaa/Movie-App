/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function NavbarToggler({ ...rest }) {
    return (
        <button
            className="navbar-toggler"
            type="button"
            {...rest}
        >
            <span className="icon" />
            <span className="icon" />
            <span className="icon" />
        </button>
    );
}
