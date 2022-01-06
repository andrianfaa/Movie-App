import CONFIG from './config';

const ApiEndpoint = {
    Movie: {
        TrendingMovie: (page = 1) => `${CONFIG.tmdbApi.baseUrl}trending/movie/week?api_key=${CONFIG.tmdbApi.apiKey}&page=${page}`,
        TopRated: (page = 1) => `${CONFIG.tmdbApi.movie}top_rated?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        Detail: (id = 1) => `${CONFIG.tmdbApi.movie}${id}?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US`,
        Trending: (page = 1) => `${CONFIG.tmdbApi.baseUrl}trending/all/week?api_key=${CONFIG.tmdbApi.apiKey}&page=${page}`,
    },
    Tv: {
        OnTheAir: (page = 1) => `${CONFIG.tmdbApi.tv}on_the_air?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        Popular: (page = 1) => `${CONFIG.tmdbApi.tv}popular?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        TopRated: (page = 1) => `${CONFIG.tmdbApi.tv}top_rated?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
    },
    Search: (query, page = 1) => `${CONFIG.tmdbApi.baseUrl}search/multi?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`,
};

export default ApiEndpoint;
