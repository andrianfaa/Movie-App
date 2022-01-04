/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TvShowReducer = createSlice({
    name: 'TvShowReducer',
    initialState: {
        tvshows: [],
    },
    reducers: {
        setTvShows: (state, { payload }) => {
            state.tvshows = payload;
        },
    },
});

export const {
    setTvShows,
} = TvShowReducer.actions;

export default TvShowReducer.reducer;
