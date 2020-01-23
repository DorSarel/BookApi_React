import React from 'react';
import './style.scss';
import { ReactComponent as Icon } from '../../assets/img/star.svg';

export const Sidebar = () => (
  <nav className='sidebar'>
    <ul className='sidebar__list'>
      <li className='sidebar__item'>
        <a href='#' className='sidebar__link'>
          <Icon />
          <span>Favorites</span>
        </a>
      </li>
    </ul>
    <p className='copyright'>This app was built by Dor Sarel</p>
  </nav>
);
