import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function FullWidthLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'full-width-link-button';
  if (router === true) {
    return (
      <Link to={to} className={`full-width-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`full-width-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

FullWidthLink.defaultProps = {
  children: '',
  to: '',
  button: false,
  router: false,
  className: '',
};

FullWidthLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool.isRequired,
  router: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default FullWidthLink;
