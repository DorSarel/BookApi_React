import React, { Component } from 'react';
import { Layout } from './container/Layout';
import { Gallery } from './container/Gallery';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './AppDataProvider';

export class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getData('harry potter').then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <Layout name='content'>
        <Header />
        <main className='content'>
          <Sidebar />
          <Gallery books={this.state.books} />
        </main>
      </Layout>
    );
  }
}
