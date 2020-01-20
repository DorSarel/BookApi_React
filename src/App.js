import React, { Component } from 'react';
import { Layout } from './container/Layout';
import { Gallery } from './container/Gallery';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './AppDataProvider';

export class App extends Component {
  state = {
    books: [],
    searchTerm: '',
  };

  componentDidMount() {
    getData('harry potter').then(books => {
      this.setState({ books });
    });
  }

  onSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  searchBooksByTerm = e => {
    e.preventDefault();
    if (this.state.searchTerm) {
      getData(this.state.searchTerm).then(books => {
        this.setState({ books, searchTerm: '' });
      });
    }
  };

  render() {
    return (
      <Layout name='content'>
        <Header
          change={this.onSearchTermChange}
          search={this.searchBooksByTerm}
          bookToSearch={this.state.searchTerm}
        />
        <main className='content'>
          <Sidebar />
          <Gallery books={this.state.books} />
        </main>
      </Layout>
    );
  }
}
