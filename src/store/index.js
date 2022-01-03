import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/User.reducer';

const Store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export default Store;
