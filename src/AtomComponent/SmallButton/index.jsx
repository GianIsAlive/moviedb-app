import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function SmallButton({ children, onClick, className }) {
  return (
    <button
      className={`small-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

SmallButton.defaultProps = {
  children: '',
  className: '',
  onClick: '',
};

SmallButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default SmallButton;
