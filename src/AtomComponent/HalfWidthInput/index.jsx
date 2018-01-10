import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function HalfWidthInput({ className, value, placeholder, onChange }) {
  return (
    <input
      type="text"
      className={`half-width-input ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

HalfWidthInput.defaultProps = {
  value: '',
  placeholder: '',
  className: '',
};

HalfWidthInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default HalfWidthInput;
