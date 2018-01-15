import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

import submitSearch from './SearchResultAction';

class SearchResultView extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    const query = location.search;
    dispatch(submitSearch(query));
  }
  render() {
    const { data } = this.props;
    let searchResult;
    if (data) {
      searchResult = data.results.map((movie, idx) => {
        return (
          <section key={idx.toString()} className="search-result">
            <section className="search-result-poster">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </section>
            <section className="search-result-text">
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
              <Link to={`movie?id=${movie.id}`}>Show Movie Details</Link>
            </section>
          </section>
        );
      });
    }
    return (
      <div className="search-result-container">
        {searchResult}
      </div>
    );
  }
}

SearchResultView.defaultProps = {
  location: undefined,
  data: undefined
};

SearchResultView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }),
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      overview: PropTypes.string
    }))
  })
};

export default SearchResultView;
