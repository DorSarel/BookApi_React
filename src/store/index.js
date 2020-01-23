import { createStore } from 'redux';

const initialState = {
  books: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(reducer);
