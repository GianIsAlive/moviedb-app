import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import App from './App';

// Reducer
import PolymerizeApp from './reducer';

// Style import
import './style/reset.css';
import './style/style.scss';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app'));
