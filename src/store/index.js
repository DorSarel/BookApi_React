import { createStore } from 'redux';
import { ADD_BOOK_TO_FAVORITES } from './actionTypes';
import { addBookToFavorites } from './selectors';

const initialState = {
  books: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_FAVORITES:
      return addBookToFavorites(state, action.payload);
  }
  return state;
};

export const store = createStore(reducer);
