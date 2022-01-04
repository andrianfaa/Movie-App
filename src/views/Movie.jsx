/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../actions/Movie';
import { setMovies } from '../store/reducers/Movie.reducer';
import Hero from '../components/hero/Hero';
import MovieCard from '../components/card/MovieCard';

export default function MoviePage() {
    const Dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movie);

    React.useEffect(async () => {
        window.scrollTo(0, 0);

        if (movies.length === 0) {
            const movieData = await getMovies();

            Dispatch(setMovies(movieData));
        }
    }, []);

    return (
        <>
            <Hero>
                <p>Movie App</p>
                <h1>Movies</h1>
            </Hero>
            <div className="container">
                <p>
                    {movies.length}
                    {' '}
                    Items
                </p>
                <br />

                {movies.length > 0 && (
                    <div id="listRow">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title || movie.original_name}
                                poster={movie.poster_path}
                                rating={movie.vote_average}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
