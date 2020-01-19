import React, { Component } from 'react';
import { Layout } from './container/Layout';
import { Gallery } from './container/Gallery';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export class App extends Component {
  state = {
    books: [
      {
        title: 'Harry potter',
        authors: ['J.K.Rowling'],
        img:
          'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
      },
      {
        title: 'Harry potter',
        authors: ['J.K.Rowling'],
        img:
          'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
      },
      {
        title: 'Harry potter',
        authors: ['J.K.Rowling'],
        img:
          'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
      },
    ],
  };

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
