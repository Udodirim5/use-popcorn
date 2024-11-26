const WatchedMovieCard = ({ movie, onRemoveWatchedMovie }) => {
  const runtime = Number.isFinite(movie.runtime) ? movie.runtime : 0;

  return (
    <li>
      <img src={movie.poster} alt={`${movie.Title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>
            {Number.isFinite(movie.imdbRating) ? movie.imdbRating : "N/A"}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>
            {Number.isFinite(movie.userRating) ? movie.userRating : "N/A"}
          </span>
        </p>
        <p>
          <span>⏳</span>
          <span>{`${runtime} min(s)`}</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onRemoveWatchedMovie(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovieCard