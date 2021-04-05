import axios from 'axios';

import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
} from '../constants/charactersConstants';

export const listCharacters = number => async dispatch => {
  dispatch({
    type: CHARACTER_LIST_REQUEST,
  });
  try {
    const url = `https://swapi.dev/api/people/?page=${number}`;
    const { data } = await axios.get(url);
    dispatch({ type: CHARACTER_LIST_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: CHARACTER_LIST_FAIL, payload: error.message });
  }
};
