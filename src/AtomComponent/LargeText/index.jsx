import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function LargeText({ children, className }) {
  return (
    <p className={`large-text ${className}`}>
      {children}
    </p>
  );
}

LargeText.defaultProps = {
  children: '',
  className: '',
};

LargeText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default LargeText;
