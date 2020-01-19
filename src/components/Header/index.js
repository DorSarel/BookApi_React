import React from 'react';
import './style.scss';

export const Header = ({ change, search, bookToSearch }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Books API</h1>
      <form className='header__form' onSubmit={search}>
        <input
          className='header__search-input'
          type='search'
          placeholder='Enter book name'
          value={bookToSearch}
          onChange={change}
        />
      </form>
    </header>
  );
};
