export const GET_NOWPLAYING_MOVIES = "GET_NOWPLAYING_MOVIES";
export const GET_NOWPLAYING_MOVIES_SUCCESS = "GET_NOWPLAYING_MOVIES_SUCCESS";
export const GET_NOWPLAYING_MOVIES_FAILURE = "GET_NOWPLAYING_MOVIES_FAILURE";
export const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

export const getNowplayingMovies = () => ({
  type: GET_NOWPLAYING_MOVIES,
});

export const getNowplayingMoviesSuccess = (movies) => ({
  type: GET_NOWPLAYING_MOVIES_SUCCESS,
  payload: movies,
});

export const getNowplayingMoviesFailure = () => ({
  type: GET_NOWPLAYING_MOVIES_FAILURE,
});

//combine them all in async thunk

export function fetchNowplayingMovies() {
  return async (dispatch) => {
    dispatch(getNowplayingMovies());

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      dispatch(getNowplayingMoviesSuccess(data));
    } catch (error) {
      dispatch(getNowplayingMoviesFailure());
    }
  };
}
