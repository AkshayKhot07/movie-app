import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MovieCard } from "../components/MovieCard";

import "./SearchMovies.css";

const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export default function SearchMovies() {
  const [isFetching, setIsFetching] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await response.json();
      setMovieData(data.results);
      setIsFetching(false);
      console.log(data);
    })();
  }, [query]);

  return (
    <div className="search-movies-container">
      <div className="search-movies-grid">
        {isFetching && <p>Loading movies...</p>}
        {movieData &&
          movieData.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
