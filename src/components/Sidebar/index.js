import React from 'react';
import './style.scss';

export const Sidebar = () => (
  <nav className='sidebar'>
    <ul className='sidebar__list'>
      <li className='sidebar__item'>
        <a href='#' className='sidebar__link'>
          Favorites
        </a>
      </li>
    </ul>
    <p className='copyright'>This app was build by Dor Sarel</p>
  </nav>
);
