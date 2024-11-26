const average = (arr) =>
  arr.length ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;


const WatchedSummary = ({ watched }) => {
  const validRuntime = watched
    .map((movie) => movie.runtime)
    .filter((rt) => typeof rt === "number" && !isNaN(rt));

  const avgImdbRating = average(
    watched.map((movie) =>
      typeof movie.imdbRating === "number" && !isNaN(movie.imdbRating)
        ? movie.imdbRating
        : 0
    )
  );
  const avgUserRating = average(
    watched.map((movie) =>
      typeof movie.userRating === "number" && !isNaN(movie.userRating)
        ? movie.userRating
        : 0
    )
  );
  const avgRuntime = average(validRuntime);

  const formatNumber = (num, decimals = 1) =>
    Number.isFinite(num) ? num.toFixed(decimals) : "N/A";

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          {watched.length} {watched.length === 1 ? "movie" : "movies"}
        </p>
        <p>
          <span>⭐️</span>
          <span>{formatNumber(avgImdbRating)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{formatNumber(avgUserRating)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{formatNumber(avgRuntime)} min(s)</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
