/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CONFIG from '../../globals/config';
import { IconStar, IconLike } from '../icons';

export default function MovieCardSuggestion({
    id,
    title,
    poster,
    rating,
    type,
}) {
    return (
        <div className="movie-card-suggestion">
            <Link to={`/${type}/${id}`} className="movie-card-suggestion-image">
                <div className="movie-card-star">
                    <IconStar />
                    <span>{rating}</span>
                </div>
                <img data-src={CONFIG.tmdbApi.image + poster} alt={title} className="lazyload" />
            </Link>
            <div className="movie-card-suggestion-content">
                <p className="text-white text-bold">{title}</p>
                <p className="suggest">
                    <IconLike className="icon" />
                    Suggest This
                </p>
            </div>
        </div>
    );
}
