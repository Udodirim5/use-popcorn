import { useEffect, useState } from "react";

const KEY = "5854b1d2";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController(); // Define here

    const timeoutId = setTimeout(() => {
      // Skip fetching if query length is less than 3
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // Fetch movies asynchronously
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error(`Something went wrong`);
          const data = await res.json();
          if (data.Response === "False") throw new Error("No movies found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovies();
    }, 500); // 500ms delay

    return () => {
      controller.abort(); // Abort fetch on cleanup
      clearTimeout(timeoutId); // Cleanup timeout
    };
  }, [query]);

  return { movies, isLoading, error };
};
