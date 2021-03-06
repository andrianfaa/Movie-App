import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/User.reducer';
import MovieReducer from './reducers/Movie.reducer';
import TvShowReducer from './reducers/TvShow.reducer';

const Store = configureStore({
    reducer: {
        user: UserReducer,
        movie: MovieReducer,
        tvshow: TvShowReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default Store;
