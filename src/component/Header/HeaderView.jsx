import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import handleChange from './HeaderAction';

function HeaderView({ dispatch, query }) {
  return (
    <div className="main-header-container">
      <header className="main-header">
        <h1 className="app-name"><Link to="/">Best Film Ever</Link></h1>
        <form
          method="POST"
          className="movie-search-bar"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Enter a movie name"
            name="name"
            value={query}
            onChange={(e) => { dispatch(handleChange(e.target.value)); }}
          />
          <button
            type="submit"
            onClick={() => {
              window.location.href = `/search?movie-name=${query}`;
            }}
          >
            Search
          </button>
        </form>
      </header>
    </div>
  );
}

export default HeaderView;
