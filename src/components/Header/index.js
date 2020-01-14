import React from 'react';
import './style.scss';

export const Header = ({ bookToSearch }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Books API</h1>
      <form className='header__form'>
        <input
          className='header__search-input'
          type='search'
          placeholder='Enter book name'
        />
      </form>
    </header>
  );
};
