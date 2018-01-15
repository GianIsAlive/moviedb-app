import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

import {
  submitMovieDetailsRequest,
  submitRecommendationRequest,
  submitCastRequest
} from './MovieDetailsAction';

class MovieDetailsView extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(submitMovieDetailsRequest(location.search));
    dispatch(submitRecommendationRequest(location.search));
    dispatch(submitCastRequest(location.search));
  }
  render() {
    const { dispatch, details, casts, recommendations, location } = this.props;
    let MovieDetail = [];
    if (details) {
      let Genre = [];
      if (details) {
        Genre = details.genres.map((genre, idx) => {
          return <p key={idx.toString()}>{genre.name}</p>;
        });
      }
      let Casts = [];
      if (casts) {
        Casts = casts.cast.slice(0, 4).map((actor, idx) => {
          return <p key={idx.toString()}>{actor.name}</p>;
        });
      }
      MovieDetail = (
        <section className="movie-detail">
          <section className="movie-detail-backdrop">
            <section className="movie-detail-title">
              <h2>{details.title}</h2>
              {details.tagline &&
                <h3>{details.tagline}</h3>
              }
            </section>
            <img src={`https://image.tmdb.org/t/p/w1000/${details.backdrop_path}`} alt={`${details.title} backdrop`} />
          </section>
          <section className="movie-detail-info">
            <section className="movie-detail-poster">
              <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`${details.title}`} />
            </section>
            <section className="movie-detail-text">
              <h3 className="md-text">IMDb vote: {details.vote_average}</h3>
              <p className="md-text">{details.release_date}</p>
              <div className="md-text movie-detail-genre"><p>Genre: </p>{Genre}</div>
              <p className="md-text movie-country">Country: {details.production_countries.length !== 0 ? details.production_countries[0].name : 'United States'}</p>
              <div className="md-text movie-casts">
                <p>Cast: </p>
                {Casts}
              </div>
              <p className="md-text">{details.overview}</p>
              <p className="md-text">Revenue: {details.revenue}</p>
              <a href={`http://www.imdb.com/title/${details.imdb_id}`} target="_BLANK">See Full Cast and Trailer on IMDb</a>
            </section>
          </section>
        </section>
      );
    }
    let Recommendations = [];
    if (recommendations) {
      Recommendations = recommendations.results.map((recommendation, idx) => {
        return (
          <section key={idx.toString()} className="movie-recommendations-container">
            <section className="movie-recommendations-image">
              <img src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`} alt={recommendation.title} />
            </section>
            <section className="movie-recommendations-text">
              <h2>{recommendation.title}</h2>
              <p>{recommendation.release_date}</p>
              <p>{recommendation.overview}</p>
              <Link
                onClick={() => { dispatch(dispatch(submitMovieDetailsRequest(location.search))); }}
                to={`movie?id=${recommendation.id}`}
              >
                Show Movie Details
              </Link>
            </section>
          </section>
        );
      });
    }
    return (
      <section className="movie-detail-container">
        {MovieDetail}
        <section className="movie-recommendations">
          <h2>We think you might also like these movies:</h2>
        </section>
        {Recommendations}
      </section>
    );
  }
}

MovieDetailsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  details: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  casts: PropTypes.shape({
    cast: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  recommendations: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired
};

export default MovieDetailsView;
