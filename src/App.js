import React, { Component } from 'react';
import _ from 'lodash';
import { Layout } from './container/Layout';
import { Gallery } from './container/Gallery';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { getData } from './AppDataProvider';

export class App extends Component {
  state = {
    books: [],
    favorites: [],
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

  addBookToFavorites = book => {
    // check if book already in favorites
    if (
      this.state.favorites.length > 0 &&
      this.state.favorites.findIndex(item => item.id === book.id) !== -1
    ) {
      // yes - alert already in favorites (later should change button)
      alert(`${book.title} already in your favorites`);
      return;
    }
    // add book to start of favorites
    book.isInFavorites = true;
    const favorites = [book, ...this.state.favorites];
    this.setState({ favorites });
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
          <Gallery books={this.state.books} addBook={this.addBookToFavorites} />
        </main>
      </Layout>
    );
  }
}
