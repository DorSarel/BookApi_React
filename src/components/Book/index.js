import React from 'react';
import './style.scss';
import { ReactComponent as PlusIcon } from '../../assets/img/plus.svg';

export const Book = ({ img, title, authors = [], disabled, addBook }) => {
  let formattedAuthors = authors.reduce((acc, author) => {
    return acc + `${author} & `;
  }, '');
  formattedAuthors = formattedAuthors.substring(0, formattedAuthors.length - 2);

  let toggleButton = (
    <React.Fragment>
      <span className='book__btn-text'>Add to favorites</span>
      <PlusIcon />
    </React.Fragment>
  );

  return (
    <li className='book'>
      <div className='book__photo'>
        <img src={img} alt={title} className='book__image' />
      </div>
      <div className='book__details'>
        <h2 className='book__title'>{title}</h2>
        <p className='book__authors'>{formattedAuthors}</p>
        <button onClick={addBook} disabled={disabled} className='book__btn-add'>
          {toggleButton}
        </button>
      </div>
    </li>
  );
};
