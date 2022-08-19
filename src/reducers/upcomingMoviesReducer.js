import * as actions from "../actions/upcomingMoviesAction";

export const initialState = {
  movies: [],
  loading: false,
  hasErrors: false,
};

export default function moviesUpcomingReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_UPCOMING_MOVIES:
      return { ...state, loading: true };
    case actions.GET_UPCOMING_MOVIES_SUCCESS:
      return { movies: action.payload, loading: false, hasErrors: false };
    case actions.GET_UPCOMING_MOVIES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
