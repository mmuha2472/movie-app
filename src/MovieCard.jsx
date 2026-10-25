import { useMovieContext } from './service/Moviecontext';


function MovieCard({ movie }) {

  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick() {
    if (favorite) removeFavorite(movie.id);
    else addFavorite(movie);
  }
  return (
    <div className='movie_card'>
      <div className='movie_poster'>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
          alt={movie.title ? `${movie.title} poster` : 'Movie poster'}
        />
        <div className='movie_overlay'>
            <button
              type="button"
              className={`favorite_btn ${favorite ? 'active' : ''}`}
              onClick={onFavoriteClick}
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              aria-pressed={favorite}
            >
              {favorite ? '♥' : '♡'}
            </button>

        </div>

      </div>
      <div className='movie_info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
