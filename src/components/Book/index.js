import React from 'react';
import './style.scss';
import plusIcon from '../../assets/img/plus.svg';
import { ReactComponent as Icon } from '../../assets/img/plus.svg';

export const Book = ({ img, title, authors = [], addBook }) => {
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
        <button onClick={addBook} className='book__btn-add'>
          <span className='book__btn-text'>Add to favorites</span>
          <Icon />
        </button>
      </div>
    </li>
  );
};
