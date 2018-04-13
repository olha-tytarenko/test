import React, { Component } from 'react';
import './modal.css';

export class Modal extends Component {
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

    if (userName && email && password) {
      const newUser = {
        name: userName.value,
        email: email.value,
        password: password.value,
      };

      this.props.submitHandler(newUser);
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
              email="email"
              className="form-control-item"
            />
            <input
              type="password"
              placeholder="Password"
              password="password"
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
