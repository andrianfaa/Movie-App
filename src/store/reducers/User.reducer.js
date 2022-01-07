/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const UserReducer = createSlice({
    name: 'UserReducer',
    initialState: {
        user: {},
        isAuth: false,
    },
    reducers: {
        setAuth: (state, { payload }) => {
            state.isAuth = payload;
        },
    },
});

export const {
    setAuth,
} = UserReducer.actions;

export default UserReducer.reducer;
