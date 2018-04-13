import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.css';

export class Modal extends Component {
  static get propTypes() {
    return {
      submitHandler: PropTypes.func.isRequired,
      hideModal: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.validateAndSave = this.validateAndSave.bind(this);
  }

  validateAndSave(event) {
    event.preventDefault();
    console.log(event.target.userName);

    const {
      userName,
      email,
      password,
    } = event.target;

    const newUser = {
      name: userName.value,
      email: email.value,
      password: password.value,
    };

    if (newUser.name && newUser.email && newUser.password) {
      this.props.submitHandler(newUser);
      this.props.hideModal();
    }
  }

  render() {
    return this.props.isModalVisible && (    
      <div className="modal-overlay">
        <div className="modal">
          <form onSubmit={this.validateAndSave} className="create-user-from">
            <input
              type="text"
              placeholder="Name"
              name="userName"
              className="form-control-item"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control-item"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control-item"
            />
            <button className="create-button">Create</button>
          </form>
          <button className="cancel-button" onClick={this.props.hideModal}>+</button>
        </div>
      </div>
    );
  }
}
