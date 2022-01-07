/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/hero/Hero';
import { getMovies, getTrendingMovies } from '../actions/Movie';
import { getTvShow } from '../actions/TvShow';
import { setMovies, setTrendingMovies } from '../store/reducers/Movie.reducer';
import { setTvShows } from '../store/reducers/TvShow.reducer';
import MovieCard from '../components/card/MovieCard';
import MovieCardPlaceholder from '../components/card/MovieCardPlaceholder';

export default function HomePage() {
    const [category, setCategory] = React.useState('all');
    const Dispatch = useDispatch();
    const { movies, trendingMovies } = useSelector((state) => state.movie);
    const { tvshows } = useSelector((state) => state.tvshow);

    const renderContentByCategory = () => {
        switch (category) {
        case 'tvshows':
            return tvshows;

        case 'movies':
            return movies;

        default:
            return trendingMovies;
        }
    };

    const switchCategory = () => {
        switch (category) {
        case 'tvshows':
            return 'TV Shows';

        case 'movies':
            return 'Movies';

        default:
            return 'All';
        }
    };

    const handleChangeCategory = (value) => {
        setCategory(value);
    };

    React.useState(async () => {
        window.scrollTo(0, 0);

        if (movies.length === 0 || trendingMovies.length === 0 || tvshows.length === 0) {
            const movieData = await getMovies();
            const trendingMovieData = await getTrendingMovies();
            const tvshowData = await getTvShow();

            Dispatch(setMovies(movieData));
            Dispatch(setTvShows(tvshowData));
            Dispatch(setTrendingMovies(trendingMovieData));
        }
    }, []);

    return (
        <>
            <Hero include>
                <h1>MaileHereko</h1>
                <p>
                    List of movies and TV Shows, I,
                    {' '}
                    <a href="https://andriann.co/" className="link">Andrian Fadhilla</a>
                    , have watched till date. Explore what I have watched and also feel free to make a
                    {' '}
                    <Link to="/suggest" className="link">suggestion</Link>
                    . 😉
                </p>
            </Hero>
            <div className="container">
                <div className="category-control-wrapper">
                    <div className="category-control">
                        <div
                            className={`category-control-active-indicator ${category}`}
                        />

                        <div
                            className={`category-control-item ${category === 'all' ? 'active' : ''}`}
                            onClick={() => handleChangeCategory('all')}
                        >
                            <span>All</span>
                        </div>
                        <div
                            className={`category-control-item ${category === 'movies' ? 'active' : ''}`}
                            onClick={() => handleChangeCategory('movies')}
                        >
                            <span>Movies</span>
                        </div>
                        <div
                            className={`category-control-item ${category === 'tvshows' ? 'active' : ''}`}
                            onClick={() => handleChangeCategory('tvshows')}
                        >
                            <span>TV Shows</span>
                        </div>
                    </div>
                </div>
                <br />

                <h2>
                    {switchCategory()}
                    <span className="body-small text-normal">
                        (
                        {renderContentByCategory().length}
                        {' '}
                        Items)
                    </span>
                </h2>

                <div id="listRow">
                    {movies.length > 0 ? renderContentByCategory().map((item) => (
                        <MovieCard
                            key={item.id}
                            id={item.id}
                            title={item.original_title || item.original_name}
                            poster={item.poster_path}
                            rating={item.vote_average}
                            type={item.media_type ?? 'tv'}
                        />
                    )) : (
                        <>
                            <MovieCardPlaceholder />
                            <MovieCardPlaceholder />
                            <MovieCardPlaceholder />
                            <MovieCardPlaceholder />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
