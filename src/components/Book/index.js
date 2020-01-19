import React from 'react';
import './style.scss';

export const Book = ({ img, title, authors = [] }) => {
  let formattedAuthors = authors.reduce((acc, author) => {
    return acc + `${author} & `;
  }, '');
  formattedAuthors = formattedAuthors.substring(0, formattedAuthors.length - 2);

  return (
    <li className='book'>
      <div className='book__photo'>
        <img src={img} alt={title} className='book__image' />
      </div>
      <div className='book__details'>
        <h2 className='book__title'>{title}</h2>
        <p className='book__authors'>{formattedAuthors}</p>
      </div>
    </li>
  );
};
