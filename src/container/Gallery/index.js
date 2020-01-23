import React from 'react';
import { connect } from 'react-redux';
import { ADD_BOOK_TO_FAVORITES } from '../../store/actionTypes';
import { Book } from '../../components/Book';
import './style.scss';

const Gallery = ({ books = [], addBook }) => {
  let booksToShow = (
    <div className='gallery__no-books'>There isn`t any books to show</div>
  );
  if (books.length > 0) {
    booksToShow = books.map(book => (
      <Book
        key={book.id}
        img={book.img}
        title={book.title}
        authors={book.authors}
        disabled={book.isInFavorites}
        addBook={() => {
          addBook(book);
        }}
      />
    ));
  }
  return <ul className='gallery'>{booksToShow}</ul>;
};

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch({ type: ADD_BOOK_TO_FAVORITES, payload: book }),
  };
};

export const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
