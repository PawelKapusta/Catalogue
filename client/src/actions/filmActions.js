import axios from 'axios';

import { FILM_LIST_REQUEST, FILM_LIST_SUCCESS, FILM_LIST_FAIL } from '../constants/filmConstants';

export const listFilms = () => async dispatch => {
  dispatch({ type: FILM_LIST_REQUEST });
  try {
    const url = 'https://swapi.dev/api/films/';
    const { data } = await axios.get(url);
    dispatch({ type: FILM_LIST_SUCCESS, payload: data.results }); //Send only films data
  } catch (error) {
    dispatch({ type: FILM_LIST_FAIL, payload: error.message });
  }
};
