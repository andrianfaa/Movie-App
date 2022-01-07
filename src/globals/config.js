const CONFIG = {
    tmdbApi: {
        apiKey: process.env.REACT_APP_TMDB_API_KEY,
        baseUrl: 'https://api.themoviedb.org/3/',
        image: 'https://image.tmdb.org/t/p/w500',
        movie: 'https://api.themoviedb.org/3/movie/',
        tv: 'https://api.themoviedb.org/3/tv/',
        img: {
            hd: 'https://image.tmdb.org/t/p/original',
        },
    },
};

export default CONFIG;
