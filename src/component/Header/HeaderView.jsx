import React from 'react';

import './style.scss';

function HeaderView() {
  return (
    <div className="main-header-container">
      <header className="main-header">
        <h1 className="app-name">Best Film Ever</h1>
        <form className="movie-search-bar">
          <input type="text" placeholder="Enter a movie name" />
          <button type="button">Search</button>
        </form>
      </header>
    </div>
  );
}

export default HeaderView;
