/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CONFIG from '../../globals/config';
import { IconStar } from '../icons';

export default function MovieCard({
    id,
    title,
    poster,
    rating,
    type,
}) {
    return (
        <Link to={`/${type}/${id}`} className="movie-card">
            <div className="movie-card-image">
                <div className="movie-card-star">
                    <IconStar />
                    <span>{rating}</span>
                </div>
                <img data-src={CONFIG.tmdbApi.image + poster} alt={title} className="lazyload" />
            </div>
            <div className="movie-card-content">
                <p className="text-white text-bold">{title}</p>
            </div>
        </Link>
    );
}
