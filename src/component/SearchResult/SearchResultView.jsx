import React, { Component } from 'react';

import './style.scss';

import submitSearch from './SearchResultAction';

class SearchResultView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const query = window.location.search;
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

export default SearchResultView;
