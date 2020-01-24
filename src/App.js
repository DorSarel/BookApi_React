import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooksActionCreator } from './store/actionTypes';
import { Layout } from './container/Layout';
import { GalleryContainer } from './container/Gallery';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

class App extends Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks('harry potter');
  }

  onSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  searchBooksByTerm = e => {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.getBooks(this.state.searchTerm);
      this.setState({ searchTerm: '' });
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
          <GalleryContainer />
        </main>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: searchTerm => dispatch(getBooksActionCreator(searchTerm)),
  };
};

export const AppContainer = connect(null, mapDispatchToProps)(App);
