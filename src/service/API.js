// ✅ Always wrap your API key in quotes
const API_KEY = "5f1a0098976dcec0846d3d8a83b5bfdf";
const BASE_URL = "https://api.themoviedb.org/3";

// Generic fetch function
async function fetchMovies(path, params = {}) {
  if (!API_KEY) {
    throw new Error("Missing TMDB API key. Add your TMDB API key to .env.");
  }

  // Append API key + params
  const searchParams = new URLSearchParams({ api_key: API_KEY, ...params });
  const response = await fetch(`${BASE_URL}${path}?${searchParams}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.status_message || `TMDB request failed (${response.status}).`);
  }

  // Return results array if present
  return Array.isArray(data.results) ? data.results : [];
}

// Popular movies
export const getPopularMovies = () => fetchMovies("/movie/popular");

// Search movies
export const searchMovies = (query) =>
  fetchMovies("/search/movie", { query });
``