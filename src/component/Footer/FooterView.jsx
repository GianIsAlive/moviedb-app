import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import {
  goToNextPage,
  goToPreviousPage,
  resetPageNumber
} from './FooterAction';

class FooterView extends Component {
  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    if (nextProps.location.search === '') {
      dispatch(resetPageNumber());
    }
  }
  render() {
    const { dispatch, history, location, pageNumber } = this.props;
    return (
      <div className="main-footer-container">
        <footer className="main-footer">
          <nav type="context">
            <button
              onClick={() => {
                const num = pageNumber - 1;
                if (num <= 1) return '';
                dispatch(goToPreviousPage(num));
                window.scroll(0, 0);
                return history.push(`/popular-movies?page=${num}`);
              }}
            >Previous</button>
            <p>{location.search === '' ? 1 : pageNumber}</p>
            <button
              onClick={() => {
                const num = pageNumber + 1;
                dispatch(goToNextPage(num));
                window.scroll(0, 0);
                return history.push(`/popular-movies?page=${num}`);
              }}
            >next</button>
          </nav>
        </footer>
      </div>
    );
  }
}

FooterView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired,
  pageNumber: PropTypes.number.isRequired
};

export default FooterView;
