import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MovieCard } from "../components/MovieCard";

//actions
import { fetchPopularMovies } from "../actions/moviesActions";
import { fetchTopratedMovies } from "../actions/topratedMoviesAction";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesPage.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";

const MoviesPage = ({
  dispatch,
  popularmoviesloading,
  popularmovies,
  popularmovieshasErrors,

  topratedmoviesloading,
  topratedmovies,
  topratedmovieshasErrors,
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [trmSliderRef, setTrmSliderRef] = useState(null);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopratedMovies());
  }, [dispatch]);

  const renderPopularMovies = () => {
    if (popularmoviesloading) return <p>Loading movies...</p>;
    if (popularmovieshasErrors) return <p>Unable to display movies.</p>;
    // console.log(popularmovies.results);

    let moviesArray = popularmovies.results;
    if (moviesArray && moviesArray.length > 0) {
      return moviesArray.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ));
    }
  };

  const renderTopratedMovies = () => {
    if (topratedmoviesloading) return <p>Loading toprated movies...</p>;
    if (topratedmovieshasErrors)
      return <p>Unable to display toprated movies.</p>;
    console.log(topratedmovies.results);

    let moviesArray = topratedmovies.results;
    if (moviesArray && moviesArray.length > 0) {
      return moviesArray.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ));
    }
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="movies-container">
      <div className="popular-movies-container">
        <h3>Popular</h3>
        <div className="controls">
          <button
            onClick={sliderRef?.slickPrev}
            className="sliderBtn prevButton"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="sliderBtn nextButton"
          >
            <FaChevronRight />
          </button>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {renderPopularMovies()}
        </Slider>
      </div>

      <div className="toprated-movies-container">
        <h3>Top Rated</h3>
        <div className="controls">
          <button
            onClick={trmSliderRef?.slickPrev}
            className="sliderBtn prevButton"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={trmSliderRef?.slickNext}
            className="sliderBtn nextButton"
          >
            <FaChevronRight />
          </button>
        </div>
        <Slider ref={setTrmSliderRef} {...settings}>
          {renderTopratedMovies()}
        </Slider>
      </div>
    </div>
  );
};

//Map redux state to react component props
const mapStateToProps = (state) => ({
  popularmoviesloading: state.popularmovies.loading,
  popularmovies: state.popularmovies.movies,
  popularmovieshasErrors: state.popularmovies.hasErrors,

  topratedmoviesloading: state.topratedmovies.loading,
  topratedmovies: state.topratedmovies.movies,
  topratedmovieshasErrors: state.topratedmovies.hasErrors,
});

//Connect redux to react
export default connect(mapStateToProps)(MoviesPage);
