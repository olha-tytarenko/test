import React, { Component } from 'react';
import './sign-in.css';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    console.log('submit');
  }

  render() {
    return (
      <div className="sign-in">
        <h1>Sign in</h1>
        <form onSubmit={this.submitHandler}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}
