/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorIllustration from '../assets/images/illustrations/illustration-404.png';

export default function Error404() {
    return (
        <div className="container error-page">
            <div className="container">
                <img src={ErrorIllustration} alt="Error404 Illustration" className="error-illustration" />
                <h2>Lost your way?</h2>
                <p>
                    Oops! This is awkward. You are looking for something that doesn't actually exist.
                </p>
                <Link to="/" className="btn btn-regular">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
