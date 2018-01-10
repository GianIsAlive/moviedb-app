import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function FullWidthButton({ children, onClick, className }) {
  return (
    <button
      className={`full-width-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

FullWidthButton.defaultProps = {
  children: '',
  className: '',
  onClick: '',
};

FullWidthButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default FullWidthButton;
