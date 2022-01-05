import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvShow } from '../actions/TvShow';
import { setTvShows } from '../store/reducers/TvShow.reducer';
import Hero from '../components/hero/Hero';
import MovieCard from '../components/card/MovieCard';
import MovieCardPlaceholder from '../components/card/MovieCardPlaceholder';

export default function TvShowPage() {
    const Dispatch = useDispatch();
    const { tvshows } = useSelector((state) => state.tvshow);

    React.useEffect(async () => {
        window.scrollTo(0, 0);

        if (tvshows.length === 0) {
            const tvshowData = await getTvShow();

            Dispatch(setTvShows(tvshowData));
        }
    }, []);

    return (
        <>
            <Hero>
                <p>MaileHereko</p>
                <h1>Tv Shows</h1>
            </Hero>
            <div className="container">
                <p>
                    {tvshows.length}
                    {' '}
                    Items
                </p>
                <br />
                <div id="listRow">
                    {tvshows.length > 0 ? tvshows.map((tvshow) => (
                        <MovieCard
                            key={tvshow.id}
                            id={tvshow.id}
                            title={tvshow.original_name}
                            poster={tvshow.poster_path}
                            rating={tvshow.vote_average}
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