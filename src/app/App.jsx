import React from 'react';

import PopularMovies from '../component/PopularMovies/PopularMovies';
import Header from '../component/Header/Header';

function App() {
  return (
    <main className="app-container">
      <Header />
      <PopularMovies />
    </main>
  );
}

export default App;
