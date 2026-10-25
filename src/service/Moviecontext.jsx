import { createContext, useContext, useEffect, useState } from 'react';

const MovieContext = createContext(null);

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return Array.isArray(storedFavorites) ? storedFavorites : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(movie) {
    setFavorites((currentFavorites) =>
      currentFavorites.some((favorite) => favorite.id === movie.id)
        ? currentFavorites
        : [...currentFavorites, movie],
    );
  }

  function removeFavorite(movieId) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((movie) => movie.id !== movieId),
    );
  }

  function isFavorite(movieId) {
    return favorites.some((movie) => movie.id === movieId);
  }

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider.');
  }
  return context;
}