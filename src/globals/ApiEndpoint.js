import CONFIG from './config';

const ApiEndpoint = {
    Movie: {
        NowPlaying: (page = 1) => `${CONFIG.tmdbApi.movie}now_playing?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        Popular: (page = 1) => `${CONFIG.tmdbApi.movie}popular?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        TopRated: (page = 1) => `${CONFIG.tmdbApi.movie}top_rated?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        Detail: (id = 1) => `${CONFIG.tmdbApi.movie}${id}?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US`,
    },
    Tv: {
        OnTheAir: (page = 1) => `${CONFIG.tmdbApi.tv}on_the_air?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        Popular: (page = 1) => `${CONFIG.tmdbApi.tv}popular?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
        TopRated: (page = 1) => `${CONFIG.tmdbApi.tv}top_rated?api_key=${CONFIG.tmdbApi.apiKey}&language=en-US&page=${page}`,
    },
};

export default ApiEndpoint;
