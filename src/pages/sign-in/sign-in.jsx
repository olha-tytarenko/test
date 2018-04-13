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
      <div className="sign-in-page">
        <section className="sign-in-content">
          <h1 className="sign-in-content__heading">Sign in</h1>
          <form onSubmit={this.submitHandler} className="form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form__input"
            />
            <button className="form__sign-in-button">Sign in</button>
          </form>
        </section>
      </div>
    );
  }
}
