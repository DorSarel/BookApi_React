import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { SET_BOOKS, ADD_BOOK_TO_FAVORITES } from './actionTypes';
import { addBookToFavorites } from './selectors';

const initialState = {
  books: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_FAVORITES:
      return addBookToFavorites(state, action.payload);
    case SET_BOOKS:
      return { ...state, books: action.payload };
  }
  return state;
};

export const store = createStore(reducer, applyMiddleware(thunk));
