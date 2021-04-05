import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { charactersListReducer } from '../reducers/charactersReducers';
import { filmsListReducer } from '../reducers/filmsReducers';

const reducer = combineReducers({
  charactersList: charactersListReducer,
  filmsList: filmsListReducer,
});

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

console.log('store', store.getState());
export default store;
