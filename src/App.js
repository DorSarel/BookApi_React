import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <header className='header'>
          {/* <h1 className='header__title'>Books API</h1>
        <form className='header__form'>
          <input className='header__search' type='search' placeholder='Enter book name' />
        </form> */}
        </header>
        <main className='content'>
          <nav className='sidebar'></nav>
          <div className='gallery'></div>
        </main>
      </div>
    );
  }
}
