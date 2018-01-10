import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function MediumLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'medium-link-button';
  if (router === true) {
    return (
      <Link to={to} className={`medium-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`medium-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

MediumLink.defaultProps = {
  children: '',
  to: '',
  button: false,
  router: false,
  className: '',
};

MediumLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool.isRequired,
  router: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default MediumLink;
