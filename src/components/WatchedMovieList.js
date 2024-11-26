import WatchedMovieCard from "./WatchedMovieCard";
const WatchedMovieList = ({ watched, onRemoveWatchedMovie }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieCard
          movie={movie}
          key={movie.imdbID}
          onRemoveWatchedMovie={onRemoveWatchedMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
