import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailsPage.css";
import "../../src/index.css";

export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [fetching, setFetching] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      setFetching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setFetching(false);
      setMovieDetails(data);
      console.log(data);
    })();
  }, [id]);

  return (
    <div>
      {fetching && <p>Fetching movie details</p>}
      {movieDetails && (
        <div className="movie-details-container">
          <div
            className="bg-cover"
            style={{
              backgroundImage:
                "url(" +
                `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` +
                ")",
            }}
          >
            <div className="movie-poster-trailer-title-genres">
              <div className="movie-poster-trailer">
                <div className="movie-poster">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                    alt="movie_image"
                    className="moviePosterImage"
                  />
                </div>
                <a href="#" className="movie-trailer">
                  <span>
                    <i className="ri-play-fill"></i>
                    <p>WATCH</p>
                  </span>
                </a>
              </div>

              <div className="movie-title-genres">
                <h1 className="movie-title">{movieDetails.title}</h1>
                <div className="movie-genres">
                  <p>
                    {movieDetails.genres[0]
                      ? movieDetails.genres[0].name
                      : `NA`}
                  </p>
                  <p>
                    {movieDetails.genres[1]
                      ? movieDetails.genres[1].name
                      : `NA`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mtod-container">
            <div className="movie-tagline-overview-details">
              <p className="movie-tagline">{movieDetails.tagline}</p>
              <div className="movie-overview">
                <h4>OVERVIEW</h4>
                <p>{movieDetails.overview}</p>
              </div>
              <div className="movie-details">
                <h4>DETAILS</h4>
                <ul>
                  <li>Status: {movieDetails.status}</li>
                  <li>Release date: {movieDetails.release_date}</li>
                  <li>
                    Spoken language:{" "}
                    {movieDetails.spoken_languages[0]
                      ? movieDetails.spoken_languages[0].name
                      : `NA`}
                  </li>
                </ul>
              </div>
              <div className="movie-rating-runtime">
                <div className="movie-rating">
                  <h4>RATING</h4>
                  <p>{movieDetails.vote_average.toFixed(2)}</p>
                </div>
                <div className="movie-runtime">
                  <h4>RUNTIME</h4>
                  <p>{movieDetails.runtime} min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
