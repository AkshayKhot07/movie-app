import React from "react";
import "./MovieCard.css";
import { AiFillStar } from "react-icons/ai";

import NoData from "../components/Image404.jpg";

export function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <a href={/movie/ + movie.id}>
        <img
          src={
            movie.poster_path && movie.vote_count
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : NoData
          }
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
