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

// Local Storage
import {
  loadState,
  saveState
} from './app/localStorage';

const persistState = loadState();

const store = createStore(
  RootReducer,
  persistState,
  applyMiddleware(thunk)
);

// Avoid page number reset when refresh the page
store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
