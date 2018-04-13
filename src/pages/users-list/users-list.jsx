import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from './components';

export class UserList extends Component {
  static get propTypes() {
    return {
      authorizedUser: PropTypes.object,
      usersList: PropTypes.array,
      createUser: PropTypes.func,
      signOut: PropTypes.func,
      deleteUser: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      authorizedUser: {},
      usersList: [],
      createUser: () => {},
      signOut: () => {},
      deleteUser: () => {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };

    this.createUser = this.createUser.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  createUser(user) {
    this.props.createUser(user);
  }

  hideModal() {
    this.setState({
      isModalVisible: false,
    });
  }

  showModal() {
    this.setState({
      isModalVisible: true,
    });
  }

  signOut(event) {
    event.preventDefault();

    this.props.signOut();
  }

  render() {
    const {
      authorizedUser,
      usersList,
    } = this.props;

    return (
      <div className="users-list-page">
        <header>
          <div className="userInfo">
            <p className="userInfo__name">Hello, {authorizedUser.name}</p>
            <p className="userInfo__email">Email: {authorizedUser.email}</p>
          </div>
          <a onClick={this.signOut} href="">Sign out</a>
        </header>
        <section className="users-list">
          <ul>
            {usersList && usersList.map((userItem) => {
              return (
                <li key={userItem.id.toString()}>
                  Name: {userItem.name}, email: {userItem.email}
                  <button onClick={() => this.props.deleteUser(userItem.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
          <Modal
            submitHandler={this.createUser}
            isModalVisible={this.state.isModalVisible}
            hideModal={this.hideModal}
          />
          <button onClick={this.showModal}>Create user</button>
        </section>
      </div>
    );
  }
}
