import { getData } from '../AppDataProvider';

export const ADD_BOOK_TO_FAVORITES = 'ADD_BOOK_TO_FAVORITES';
export const GET_BOOKS = 'GET_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';

const setBooksActionCreator = books => {
  return { type: SET_BOOKS, payload: books };
};

export const getBooksActionCreator = searchTerm => {
  return dispatch => {
    getData(searchTerm).then(books => dispatch(setBooksActionCreator(books)));
  };
};
