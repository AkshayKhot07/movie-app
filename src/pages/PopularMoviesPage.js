import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

import "./PopularMoviesPage.css";

export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export default function PopularMoviesPage() {
  const [fetching, setFetching] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setFetching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      setFetching(false);
      setMovieDetails(data);
      console.log(data);
    })();
  }, [page]);

  function handleClick(e) {
    const previousBtn = document.querySelector(".previous-btn");

    if (e.target.textContent === "Next >>") {
      setPage((page) => page + 1);
    }

    if (e.target.textContent === "<< Previous" && page === 1) {
      previousBtn.disabled = false;
    } else if (e.target.textContent === "<< Previous" && page > 1) {
      setPage((page) => page - 1);
    }
  }

  return (
    <div className="allPopularMovies-container">
      <div className="popular-movies-grid">
        {fetching && <p>Loading popular movies...</p>}
        {movieDetails &&
          movieDetails.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div className="pagination-container">
        <button
          className="previous-btn"
          onClick={handleClick}
        >{`<< Previous`}</button>
        <div className="page-number">{page}</div>
        <button className="next-btn" onClick={handleClick}>{`Next >>`}</button>
      </div>
    </div>
  );
}
