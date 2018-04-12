import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';

import { usersListReducer } from './pages/users-list/users-list-reducer';
import App from './app';

const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  thunk,
)(createStore);

const store = createStoreWithMiddleware(usersListReducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'),
);
