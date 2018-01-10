import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function SmallText({ children, className }) {
  return (
    <p className={`small-text ${className}`}>
      {children}
    </p>
  );
}

SmallText.defaultProps = {
  className: '',
};

SmallText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SmallText;
