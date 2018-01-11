import React from 'react';

import './style.scss';

import {
  handleChange,
  submitSearch
} from './HeaderAction';

function HeaderView({ dispatch, inputValue, movieName }) {
  console.log('This is input value: ', inputValue);
  console.log('This is movie name: ', movieName);
  return (
    <div className="main-header-container">
      <header className="main-header">
        <h1 className="app-name">Best Film Ever</h1>
        <form
          method="POST"
          action="/search"
          className="movie-search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(submitSearch(inputValue));
          }}
          value="hi"
        >
          <input type="text" placeholder="Enter a movie name" name="name" value={inputValue} onChange={(e) => { dispatch(handleChange(e.target.value)); }} />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default HeaderView;
