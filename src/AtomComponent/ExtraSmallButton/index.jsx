import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ExtraSmallButton({ children, onClick, className }) {
  return (
    <button
      className={`extra-small-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ExtraSmallButton.defaultProps = {
  children: '',
  className: '',
  onClick: '',
};

ExtraSmallButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ExtraSmallButton;
