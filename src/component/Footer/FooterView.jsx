import React, { Component } from 'react';

import './style.scss';

import {
  goToNextPage,
  goToPreviousPage,
  resetPageNumber
} from './FooterAction';

class FooterView extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search === '') {
      this.props.dispatch(resetPageNumber());
    }
  }
  render() {
    return (
      <div className="main-footer-container">
        <footer className="main-footer">
          <nav type="context">
            <button
              onClick={() => {
                const num = this.props.pageNumber - 1;
                if (num <= 1) return '';
                this.props.dispatch(goToPreviousPage(num));
                this.props.history.push(`/popular-movies?page=${num}`);
                window.scroll(0, 0);
              }}
            >Previous</button>
            <p>{this.props.location.search === '' ? 1 : this.props.pageNumber}</p>
            <button
              onClick={() => {
                const num = this.props.pageNumber + 1;
                this.props.dispatch(goToNextPage(num));
                this.props.history.push(`/popular-movies?page=${num}`);
                window.scroll(0, 0);
              }}
            >next</button>
          </nav>
        </footer>
      </div>
    );
  }
}

export default FooterView;
