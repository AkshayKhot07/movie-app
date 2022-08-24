import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopratedMoviesPage from "./pages/TopratedMoviesPage";
import NowplayingMoviesPage from "./pages/NowplayingMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import SearchMovies from "./pages/SearchMovies";

import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MoviesPage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
          <Route path="/popularmovies/" element={<PopularMoviesPage />}></Route>
          <Route
            path="/topratedmovies/"
            element={<TopratedMoviesPage />}
          ></Route>
          <Route
            path="/nowplayingmovies/"
            element={<NowplayingMoviesPage />}
          ></Route>
          <Route
            path="/upcomingmovies/"
            element={<UpcomingMoviesPage />}
          ></Route>
          <Route path="/search" element={<SearchMovies />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
