import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute() {
    const { isAuth } = useSelector((state) => state.user);

    if (!isAuth) return <Outlet />;

    return <Navigate to="/dashboard" />;
}
