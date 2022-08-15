import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MovieCard } from "../components/MovieCard";
import { fetchMovies } from "../actions/moviesActions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesPage.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";

const MoviesPage = ({ dispatch, loading, movies, hasErrors }) => {
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderMovies = () => {
    if (loading) return <p>Loading movies...</p>;
    if (hasErrors) return <p>Unable to display movies.</p>;
    console.log(movies.results);

    let moviesArray = movies.results;
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
    <div>
      <h3>Popular</h3>
      <div className="controls">
        <button onClick={sliderRef?.slickPrev} className="sliderBtn prevButton">
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext} className="sliderBtn nextButton">
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {renderMovies()}
      </Slider>
    </div>
  );
};

//Map redux state to react component props
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movies: state.movies.movies,
  hasErrors: state.movies.hasErrors,
});

//Connect redux to react
export default connect(mapStateToProps)(MoviesPage);
