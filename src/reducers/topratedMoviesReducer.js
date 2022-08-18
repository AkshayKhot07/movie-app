import * as actions from "../actions/topratedMoviesAction";

export const initialState = {
  movies: [],
  loading: false,
  hasErrors: false,
};

export default function moviesTopratedReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOPRATED_MOVIES:
      return { ...state, loading: true };
    case actions.GET_TOPRATED_MOVIES_SUCCESS:
      return { movies: action.payload, loading: false, hasErrors: false };
    case actions.GET_TOPRATED_MOVIES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
