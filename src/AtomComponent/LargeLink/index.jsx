import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function LargeLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'large-link-button';
  if (router === true) {
    return (
      <Link to={to} className={`large-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`large-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

LargeLink.defaultProps = {
  children: '',
  to: '',
  button: false,
  router: false,
  className: '',
};

LargeLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool.isRequired,
  router: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default LargeLink;
