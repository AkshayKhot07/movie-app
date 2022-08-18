import { combineReducers } from "redux";

import moviesPopularReducer from "./moviesReducer"; // popular movies
import moviesTopratedReducer from "./topratedMoviesReducer"; //toprated movies

const rootReducer = combineReducers({
  popularmovies: moviesPopularReducer,
  topratedmovies: moviesTopratedReducer,
});

export default rootReducer;
