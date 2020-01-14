import React, { Component } from 'react';
import { Layout } from './container/Layout';
import { Header } from './components/Header';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <main className='content'>
          <nav className='sidebar'>sidebar</nav>
          <div className='gallery'>Gallery</div>
        </main>
      </Layout>
    );
  }
}
