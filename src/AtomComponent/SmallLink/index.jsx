import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function SmallLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'small-link-button';
  if (router === true) {
    return (
      <Link to={to} className={`small-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`small-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

SmallLink.defaultProps = {
  children: '',
  to: '',
  button: false,
  router: false,
  className: '',
};

SmallLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool.isRequired,
  router: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default SmallLink;
