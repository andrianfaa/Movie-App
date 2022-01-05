import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import PrivateRoute from './routes/PrivateRoute';
import HomePage from './views/Home';
import MoviePage from './views/Movie';
import TvShowPage from './views/TvShow';
import Error404 from './views/404';

export default function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/tvshows" element={<TvShowPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}
