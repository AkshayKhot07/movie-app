import React from "react";
import "./MovieCard.css";
import { AiFillStar } from "react-icons/ai";

export function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <a href={/movie/ + movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="movie_image"
          className="movieImage"
        />
        <div className="ratings">
          <span className="ratings-number">{movie.vote_average}</span>
          <AiFillStar />
        </div>
      </a>
    </div>
  );
}
