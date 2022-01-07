/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const MovieReducer = createSlice({
    name: 'MovieReducer',
    initialState: {
        movies: [],
        trendingMovies: [],
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload;
        },
        setTrendingMovies: (state, { payload }) => {
            state.trendingMovies = payload;
        },
    },
});

export const {
    setMovies,
    setTrendingMovies,
} = MovieReducer.actions;

export default MovieReducer.reducer;
