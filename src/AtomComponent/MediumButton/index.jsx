import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MediumButton({ children, onClick, className }) {
  return (
    <button
      className={`medium-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

MediumButton.defaultProps = {
  children: '',
  className: '',
  onClick: '',
};

MediumButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MediumButton;
