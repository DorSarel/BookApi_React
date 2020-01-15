import React, { Component } from 'react';
import { Layout } from './container/Layout';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export class App extends Component {
  render() {
    return (
      <Layout name='content'>
        <Header />
        <main className='content'>
          <Sidebar />
          <div className='gallery'>Gallery</div>
        </main>
      </Layout>
    );
  }
}
