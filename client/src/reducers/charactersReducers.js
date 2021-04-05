import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
} from '../constants/charactersConstants';

const initialState = { loading: false, characters: [], error: undefined };

export const charactersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return { ...state, loading: true };
    case CHARACTER_LIST_SUCCESS:
      return { ...state, loading: false, characters: [...state.characters, ...action.payload] };
    case CHARACTER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
