import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../component/Header/Header';
import PopularMovies from '../component/PopularMovies/PopularMovies';
import SearchResult from '../component/SearchResult/SearchResult';
import Footer from '../component/Footer/Footer';

function App() {
  return (
    <main className="app-container">
      <Header />
      <Route path="/" component={PopularMovies} />
      <Route path="/search" component={SearchResult} />
      <Footer />
    </main>
  );
}

export default App;
