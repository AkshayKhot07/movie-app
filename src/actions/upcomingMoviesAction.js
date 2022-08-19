export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_UPCOMING_MOVIES_SUCCESS = "GET_UPCOMING_MOVIES_SUCCESS";
export const GET_UPCOMING_MOVIES_FAILURE = "GET_UPCOMING_MOVIES_FAILURE";
export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export const getUpcomingMovies = () => ({
  type: GET_UPCOMING_MOVIES,
});

export const getUpcomingMoviesSuccess = (movies) => ({
  type: GET_UPCOMING_MOVIES_SUCCESS,
  payload: movies,
});

export const getUpcomingMoviesFailure = () => ({
  type: GET_UPCOMING_MOVIES_FAILURE,
});

//combine them all in async thunk

export function fetchUpcomingMovies() {
  return async (dispatch) => {
    dispatch(getUpcomingMovies());

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      dispatch(getUpcomingMoviesSuccess(data));
    } catch (error) {
      dispatch(getUpcomingMoviesFailure());
    }
  };
}
