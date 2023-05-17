export const BASE_API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "c2077b3b345882782397016e1fdc388b";
// API endpoints

export const API_MOVIES_URL = {
    POPULAR: `${BASE_API_URL}/movie/popular?api_key=S{API_KEY}}`,
    TOP_RATED: `${BASE_API_URL}/movie/top_rated?api_key=S{API_KEY}}`,
    UPCOMING: `${BASE_API_URL}/movie/upcoming?api_key=S{API_KEY}}`,
}