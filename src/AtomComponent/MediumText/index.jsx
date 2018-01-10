import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MediumText({ children, className }) {
  return (
    <p className={`medium-text ${className}`}>
      {children}
    </p>
  );
}

MediumText.defaultProps = {
  children: '',
  className: '',
};

MediumText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default MediumText;
