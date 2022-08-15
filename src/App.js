import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MoviesPage />}></Route>
      </Routes>
    </Router>
  );
}
