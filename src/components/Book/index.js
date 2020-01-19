import React from 'react';
import './style.scss';

export const Book = ({ img, title, authors }) => {
  return (
    <li className='book'>
      <div className='book__photo'>
        <img
          src='https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914'
          alt='harry potter'
          className='book__image'
        />
      </div>
      <div className='book__details'>
        <h2 className='book__title'>Harry Potter</h2>
        <p className='book__authors'>J.K Rowling</p>
      </div>
    </li>
  );
};
