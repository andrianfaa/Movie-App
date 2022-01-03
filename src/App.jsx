import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
import HomePage from './views/Home';
import Navbar from './components/navbar/Navbar';

export default function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}
