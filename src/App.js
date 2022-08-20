import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopratedMoviesPage from "./pages/TopratedMoviesPage";
import NowplayingMoviesPage from "./pages/NowplayingMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MoviesPage />}></Route>
        <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/popularmovies/" element={<PopularMoviesPage />}></Route>
        <Route path="/topratedmovies/" element={<TopratedMoviesPage />}></Route>
        <Route
          path="/nowplayingmovies/"
          element={<NowplayingMoviesPage />}
        ></Route>
        <Route path="/upcomingmovies/" element={<UpcomingMoviesPage />}></Route>
      </Routes>
    </Router>
  );
}
