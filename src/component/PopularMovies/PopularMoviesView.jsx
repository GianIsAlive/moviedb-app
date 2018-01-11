import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import displayMovies from './PopularMoviesAction';

class PopularMoviesView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(displayMovies());
  }

  render() {
    const { data } = this.props;
    let Movies = [];
    if (data) {
      Movies = this.props.data.results.map((movie, idx) => {
        let movieOverview = movie.overview;
        if (movieOverview.length > 150) {
          movieOverview = movieOverview.substring(0, 150).split(' ');
          movieOverview.pop();
          movieOverview = movieOverview.join(' ');
          movieOverview += '...';
        }
        return (
          <div key={idx.toString()} className="movie-container">
            <div className="movie-container-overlay">
              <div className="movie-overview">
                <p>{movieOverview}</p>
              </div>
              <a href="">Show Movie Details</a>
            </div>
            <section className="movie-image">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </section>
            <section className="movie-title">
              <p>{movie.title}</p>
            </section>
          </div>
        );
      });
    }
    return (
      <section className="popular-movies">
        {Movies}
      </section>
    );
  }
}

export default PopularMoviesView;
