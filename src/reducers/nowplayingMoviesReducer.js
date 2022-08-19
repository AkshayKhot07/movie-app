import * as actions from "../actions/nowplayingMoviesAction";

export const initialState = {
  movies: [],
  loading: false,
  hasErrors: false,
};

export default function moviesNowplayingReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_NOWPLAYING_MOVIES:
      return { ...state, loading: true };
    case actions.GET_NOWPLAYING_MOVIES_SUCCESS:
      return { movies: action.payload, loading: false, hasErrors: false };
    case actions.GET_NOWPLAYING_MOVIES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
