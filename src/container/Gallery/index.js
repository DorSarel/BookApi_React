import React from 'react';
import { Book } from '../../components/Book';
import './style.scss';

export const Gallery = ({ books = [] }) => {
  let booksToShow = (
    <div className='gallery__no-books'>There isn`t any books to show</div>
  );
  if (books.length > 0) {
    booksToShow = books.map((book, idx) => (
      <Book
        key={book.id}
        img={book.img}
        title={book.title}
        authors={book.authors}
      />
    ));
  }
  return <ul className='gallery'>{booksToShow}</ul>;
};
