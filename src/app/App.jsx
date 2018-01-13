import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../component/Header/Header';
import PopularMovies from '../component/PopularMovies/PopularMovies';
import SearchResult from '../component/SearchResult/SearchResult';
import MovieDetails from '../component/MovieDetails/MovieDetails';
import Footer from '../component/Footer/Footer';

function App() {
  return (
    <main className="app-container">
      <Route path="*" component={Header} />
      <Route exact path="/" component={PopularMovies} />
      <Route path="/popular-movies" component={PopularMovies} />
      <Route path="/search" component={SearchResult} />
      <Route path="/movie" component={MovieDetails} />
      <Route path="/" component={Footer} />
    </main>
  );
}

export default App;
