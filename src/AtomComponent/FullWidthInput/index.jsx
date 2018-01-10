import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function FullWidthInput({ className, value, placeholder, onChange }) {
  return (
    <input
      type="text"
      className={`full-width-input ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

FullWidthInput.defaultProps = {
  value: '',
  placeholder: '',
  className: '',
};

FullWidthInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FullWidthInput;
