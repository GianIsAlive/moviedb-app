import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function HalfWidthTextarea({ className, value, placeholder, onChange }) {
  return (
    <textarea
      type="text"
      className={`half-width-textarea ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

HalfWidthTextarea.defaultProps = {
  value: '',
  placeholder: '',
  className: '',
};

HalfWidthTextarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default HalfWidthTextarea;
