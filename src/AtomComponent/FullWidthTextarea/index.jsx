import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function FullWidthTextarea({ className, value, placeholder, onChange }) {
  return (
    <textarea
      type="text"
      className={`full-width-textarea ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

FullWidthTextarea.defaultProps = {
  value: '',
  placeholder: '',
  className: '',
};

FullWidthTextarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FullWidthTextarea;
