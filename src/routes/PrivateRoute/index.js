import React from 'react';
import { Outlet, Navigation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
    const { isAuth } = useSelector((state) => state.user);

    if (!isAuth) {
        return (
            <Navigation to="/login" />
        );
    }
    return <Outlet />;
}
