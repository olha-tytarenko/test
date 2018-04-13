import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sign-in.css';

export class SignIn extends Component {
  static get propTypes() {
    return {
      signIn: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      signIn: () => {},
    };
  }

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    const userCredentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (userCredentials.email && userCredentials.password) {
      this.props.signIn(userCredentials.email, userCredentials.password);
    }
  }

  render() {
    return (
      <div className="sign-in">
        <h1>Sign in</h1>
        <form onSubmit={this.submitHandler}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}
