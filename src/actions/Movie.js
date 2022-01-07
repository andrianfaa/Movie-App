/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import ApiEndpoint from '../globals/ApiEndpoint';

const getMovies = async () => {
    const response = await axios.get(ApiEndpoint.Movie.TrendingMovie());
    const page2 = await axios.get(ApiEndpoint.Movie.TrendingMovie(2));
    const page3 = await axios.get(ApiEndpoint.Movie.TrendingMovie(3));

    const { data } = response;
    const { data: data2 } = page2;
    const { data: data3 } = page3;

    if (!data && !data2 && !data3) {
        return [];
    }

    return [...data.results, ...data2.results, ...data3.results];
};

const getPopularMovies = async () => {
    const response = await axios.get(ApiEndpoint.Movie.Popular());
    const { data } = response;

    if (!data) {
        return [];
    }

    return data.results;
};

const getDetailMovie = async (id) => {
    const response = await axios.get(ApiEndpoint.Movie.Detail(id));
    const { data } = response;

    if (!data) {
        return [];
    }

    return data;
};

const getTrendingMovies = async () => {
    const page1 = await axios.get(ApiEndpoint.Movie.Trending());
    const page2 = await axios.get(ApiEndpoint.Movie.Trending(2));
    const { data } = page1;
    const { data: data2 } = page2;

    if (!data || !data2) {
        return [];
    }

    return [...data.results, ...data2.results];
};

export {
    getMovies,
    getPopularMovies,
    getDetailMovie,
    getTrendingMovies,
};
