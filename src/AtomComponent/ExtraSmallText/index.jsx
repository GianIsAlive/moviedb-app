import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ExtraSmallText({ children, className }) {
  return (
    <p className={`extra-small-text ${className}`}>
      {children}
    </p>
  );
}

ExtraSmallText.defaultProps = {
  children: '',
  className: '',
};

ExtraSmallText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default ExtraSmallText;
