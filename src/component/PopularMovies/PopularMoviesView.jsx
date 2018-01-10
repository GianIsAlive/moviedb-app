import React from 'react';

import './style.scss';

import Jumanji from '../../assets/jumanji.jpeg';

function PopularMoviesView() {
  const Movies = [];
  for (let x = 0; x < 10; x += 1) {
    Movies.push(
      <div className="movie-container">
        <section className="movie-image">
          <img src={`dist/${Jumanji}`} alt="jumanji stuff" />
        </section>
        <section className="movie-title">
          <p>Jumanji</p>
        </section>
      </div>
    );
  }
  return (
    <section className="popular-movies">
      {Movies}
    </section>
  );
}

export default PopularMoviesView;
