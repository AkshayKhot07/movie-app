export const GET_TOPRATED_MOVIES = "GET_TOPRATED_MOVIES";
export const GET_TOPRATED_MOVIES_SUCCESS = "GET_TOPRATED_MOVIES_SUCCESS";
export const GET_TOPRATED_MOVIES_FAILURE = "GET_TOPRATED_MOVIES_FAILURE";
export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export const getTopratedMovies = () => ({
  type: GET_TOPRATED_MOVIES,
});

export const getTopratedMoviesSuccess = (movies) => ({
  type: GET_TOPRATED_MOVIES_SUCCESS,
  payload: movies,
});

export const getTopratedMoviesFailure = () => ({
  type: GET_TOPRATED_MOVIES_FAILURE,
});

//combine them all in async thunk

export function fetchTopratedMovies() {
  return async (dispatch) => {
    dispatch(getTopratedMovies());

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      dispatch(getTopratedMoviesSuccess(data));
    } catch (error) {
      dispatch(getTopratedMoviesFailure());
    }
  };
}
