import { FILM_LIST_REQUEST, FILM_LIST_SUCCESS, FILM_LIST_FAIL } from '../constants/filmConstants';

const initialState = { loading: false, films: [], error: undefined };

export const filmsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILM_LIST_REQUEST:
      return { ...state, loading: true };
    case FILM_LIST_SUCCESS:
      return { ...state, loading: false, films: action.payload };
    case FILM_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
