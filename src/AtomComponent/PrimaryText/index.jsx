import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function PrimaryText({ children, className }) {
  return (
    <h1 className={`primary-text ${className}`}>
      {children}
    </h1>
  );
}

PrimaryText.defaultProps = {
  children: '',
  className: '',
};

PrimaryText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default PrimaryText;
