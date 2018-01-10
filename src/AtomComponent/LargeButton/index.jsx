import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function LargeButton({ children, onClick, className }) {
  return (
    <button
      className={`large-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

LargeButton.defaultProps = {
  children: '',
  className: '',
  onClick: '',
};

LargeButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default LargeButton;
