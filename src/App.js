import React, { Component } from 'react';
import { Layout } from './container/Layout';

export class App extends Component {
  render() {
    return (
      <Layout>
        <header className='header'>
          header
          {/* <h1 className='header__title'>Books API</h1>
        <form className='header__form'>
          <input className='header__search' type='search' placeholder='Enter book name' />
        </form> */}
        </header>
        <main className='content'>
          <nav className='sidebar'>sidebar</nav>
          <div className='gallery'>Gallery</div>
        </main>
      </Layout>
    );
  }
}
