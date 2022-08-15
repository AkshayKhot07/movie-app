export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export const getMovies = () => ({
  type: GET_MOVIES,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: GET_MOVIES_FAILURE,
});

//combine them all in async thunk

export function fetchMovies() {
  return async (dispatch) => {
    dispatch(getMovies());

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      dispatch(getMoviesSuccess(data));
    } catch (error) {
      dispatch(getMoviesFailure());
    }
  };
}
