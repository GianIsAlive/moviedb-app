import React from 'react';

import './style.scss';

function HeaderView() {
  return (
    <header className="main-header">
      <h1 className="app-name">Movie App</h1>
      <form className="movie-search-bar">
        <input type="text" placeholder="Enter a movie name" />
        <button type="button">search</button>
      </form>
    </header>
  );
}

export default HeaderView;
