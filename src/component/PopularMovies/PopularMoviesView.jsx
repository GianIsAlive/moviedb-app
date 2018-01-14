import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import submitPopularMoviesReqeust from './PopularMoviesAction';

import './style.scss';

class PopularMoviesView extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    if (location.search === '') {
      return dispatch(submitPopularMoviesReqeust(''));
    }
    return dispatch(submitPopularMoviesReqeust(location.search));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location } = this.props;
    // Rerender component when route changes
    if (location.search !== nextProps.location.search) {
      dispatch(submitPopularMoviesReqeust(nextProps.location.search));
    }
  }

  render() {
    const { popularMovies } = this.props;
    let Movies = [];
    if (popularMovies) {
      Movies = popularMovies.results.map((movie, idx) => {
        let movieOverview = movie.overview;
        // Show only the first 150 words of the movie overview
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
              <Link
                to={`movie?id=${movie.id}`}
                onClick={() => window.scroll(0, 0)}
              >
                Show Movie Details
              </Link>
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

PopularMoviesView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popularMovies: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
};

export default PopularMoviesView;
