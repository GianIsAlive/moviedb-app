import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import {
  submitPopularMoviesReqeust,
  goToNextPage,
  goToPreviousPage
} from './PopularMoviesAction';

class PopularMoviesView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    return dispatch(submitPopularMoviesReqeust(''));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    if (this.props.location.search !== nextProps.location.search) {
      dispatch(submitPopularMoviesReqeust(nextProps.location.search));
    }
  }

  render() {
    // window.scrollTo(0, 0);
    const { dispatch, history, pageNumber, popularMovies } = this.props;
    let Movies = [];
    if (popularMovies) {
      Movies = popularMovies.results.map((movie, idx) => {
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
              <Link to={`movie?id=${movie.id}`}>Show Movie Details</Link>
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
