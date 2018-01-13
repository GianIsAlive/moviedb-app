import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import { goToNextPage, goToPreviousPage } from './FooterAction';

function FooterView(props) {
  return (
    <div className="main-footer-container">
      <footer className="main-footer">
        <nav type="context">
          <Link
            onClick={() => {
              props.dispatch(goToPreviousPage());
            }}
            to={`/popular-movies?page=${props.pageNumber}`}
          >Previous</Link>
          <p>{props.location.search ? props.location.search : 1 }</p>
          <Link
            onClick={() => {
              props.dispatch(goToNextPage());
            }}
            to={`/popular-movies?page=${props.pageNumber}`}
          >next</Link>
        </nav>
      </footer>
    </div>
  );
}

export default FooterView;
