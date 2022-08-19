import { combineReducers } from "redux";

import moviesPopularReducer from "./moviesReducer"; // popular movies
import moviesTopratedReducer from "./topratedMoviesReducer"; //toprated movies
import moviesNowplayingReducer from "./nowplayingMoviesReducer"; //nowplaying movies
import moviesUpcomingReducer from "./upcomingMoviesReducer"; //upcoming reducer

const rootReducer = combineReducers({
  popularmovies: moviesPopularReducer,
  topratedmovies: moviesTopratedReducer,
  nowplayingmovies: moviesNowplayingReducer,
  upcomingmovies: moviesUpcomingReducer,
});

export default rootReducer;
