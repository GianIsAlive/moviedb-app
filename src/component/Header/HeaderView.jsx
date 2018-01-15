import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'validator';

import './style.scss';

import handleChange from './HeaderAction';

function HeaderView({ dispatch, history, query }) {
  return (
    <div className="main-header-container">
      <header className="main-header">
        <h1 className="app-name"><Link to="/">Best Film Ever</Link></h1>
        <form
          method="POST"
          className="movie-search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          <input
            type="text"
            placeholder="Enter a movie name"
            name="name"
            value={query}
            onChange={(e) => {
              if (validator.isAlphanumeric(e.target.value) === false) {
                return '';
              }
              return dispatch(handleChange(e.target.value));
            }}
          />
          <button
            type="submit"
            onClick={() => {
              history.push(`/search?movie-name=${query}`);
              return dispatch(handleChange(''));
            }}
          >
            Search
          </button>
        </form>
      </header>
    </div>
  );
}

HeaderView.defaultProps = {
  query: ''
};

HeaderView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  query: PropTypes.string
};

export default HeaderView;
