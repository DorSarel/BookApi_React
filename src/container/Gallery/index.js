import React from 'react';
import { Book } from '../../components/Book';
import './style.scss';

export const Gallery = ({ books }) => {
  return (
    <ul className='gallery'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </ul>
  );
};
