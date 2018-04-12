import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import reset from 'reset-css';

import * as pages from './pages';
import * as routes from './constants';
import { SignInContainer } from './pages/sign-in/sign-in-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={routes.SIGN_IN_ROUTE} component={SignInContainer} />
        <Route path={routes.USERS_LIST_ROUTE} component={pages.UserList} />
      </div>
    );
  }
}

export default App = withRouter(App);
