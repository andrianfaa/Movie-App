/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import Hero from '../components/hero/Hero';
import ApiEndpoint from '../globals/ApiEndpoint';

export default function HomePage() {
    React.useEffect(async () => {
        const response = await axios.get(`${ApiEndpoint.Movie.NowPlaying()}`);
        console.log(response);
    }, []);

    return (
        <>
            <Hero />
            <div className="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut autem quasi accusamus labore ratione sit vel eius ducimus ea aspernatur.</p>
            </div>
        </>
    );
}
