import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

// Component
import App from './app/App';

// Reducer
import RootReducer from './app/RootReducer';

// Style import
import './style/reset.css';
import './style/style.scss';

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);

// const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
