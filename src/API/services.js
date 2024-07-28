// const TMDB_TOKEN = import.meta.env.VITE_TMDB_READ_TOKEN

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZmYwMjA0OGFkZjJkZTZmZTAwNzFlZGVhMGI4NSIsIm5iZiI6MTcyMTk4MjI1OS4xNjYzMTIsInN1YiI6IjY2MDJhNzNlMGMxMjU1MDE2NTBkZTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32cVp63vs_sNdd5nQjbFp0F_jch3pNHDC3yTO-_7bNk`
    }
};

export async function getMovies({ title }) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=true&language=ES-es&page=1`, options);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function getLatestMoviesReleases() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
}