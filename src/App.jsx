import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './views/dashboard';
import HomePage from './views/Home';
import MoviePage from './views/Movie';
import TvShowPage from './views/TvShow';
import Error404 from './views/404';
import LoginPage from './views/Login';
import DetailMoviePage from './views/detail/Movie';
import DetailTvPage from './views/detail/TvShow';
import SearchPage from './views/Search';

export default function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/tvshows" element={<TvShowPage />} />
                <Route path="/movie/:id" element={<DetailMoviePage />} />
                <Route path="/tv/:id" element={<DetailTvPage />} />
                <Route path="/search/:query" element={<SearchPage />} />

                <Route
                    path="/login"
                    element={(
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    )}
                />

                <Route
                    path="/dashboard"
                    element={(
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    )}
                />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}
