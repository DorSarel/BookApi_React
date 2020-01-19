import React from 'react';
import { Book } from '../../components/Book';
import './style.scss';

export const Gallery = ({ books = [] }) => {
  return (
    <ul className='gallery'>
      {books.map((book, idx) => (
        <Book
          key={book.id}
          img={book.img}
          title={book.title}
          authors={book.authors}
        />
      ))}
    </ul>
  );
};
