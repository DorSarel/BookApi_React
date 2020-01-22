import React from 'react';
import { Book } from '../../components/Book';
import './style.scss';

export const Gallery = ({ books = [], addBook }) => {
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
        addBook={() => {
          addBook(book);
        }}
      />
    ));
  }
  return <ul className='gallery'>{booksToShow}</ul>;
};
