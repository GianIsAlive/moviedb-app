import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function ExtraSmallLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'extra-small-link-button';
  if (router === true) {
    return (
      <Link to={to} className={`extra-small-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`extra-small-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

ExtraSmallLink.defaultProps = {
  children: '',
  to: '',
  button: false,
  router: false,
  className: '',
};

ExtraSmallLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool,
  router: PropTypes.bool,
  className: PropTypes.string,
};

export default ExtraSmallLink;
