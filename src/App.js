import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MoviesPage />}></Route>
        <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/popularmovies" element={<PopularMoviesPage />}></Route>
      </Routes>
    </Router>
  );
}
