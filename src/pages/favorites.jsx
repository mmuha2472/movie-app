import { useMovieContext } from '../service/Moviecontext';
import MovieCard from '../MovieCard';


function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your favorites</h2>
        <div className="movies_grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-empty">
      <h2>No favorite movies yet</h2>
      <p>Add a movie to your favorites and it will appear here.</p>
    </div>
  );
}

export default Favorites
