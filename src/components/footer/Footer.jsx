/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Logo from '../../assets/images/logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={Logo} alt="logo" />
                <p>
                    A fun and personal project created by
                    {' '}
                    <a href="https://andriann.co/" className="link">Andrian Fadhilla</a>
                    . Source code available on
                    {' '}
                    <a href="https://github.com/andrianfaa/Movie-App" className="link">Github</a>
                    . Open for pull request. Clone and use personally. It's up to you.
                </p>
            </div>
        </footer>
    );
}
