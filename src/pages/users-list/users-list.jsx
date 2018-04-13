import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from './components';
import './users-list.css';

export class UserList extends Component {
  static get propTypes() {
    return {
      authorizedUser: PropTypes.object,
      usersList: PropTypes.array,
      createUser: PropTypes.func,
      signOut: PropTypes.func,
      deleteUser: PropTypes.func,
      clearUsersList: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      authorizedUser: {},
      usersList: [],
      createUser: () => {},
      signOut: () => {},
      deleteUser: () => {},
      clearUsersList: () => {},
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

  componentWillMount() {
    if (!this.props.authorizedUser.name) {
      this.props.signOut();
    }
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

    this.props.clearUsersList();
    this.props.clearUser();
    this.props.signOut();
  }

  render() {
    const {
      authorizedUser,
      usersList,
    } = this.props;

    return (
      <div className="users-list-page">
        <header className="header">
          <div className="header__container">
            <div className="user-info">
              <p className="user-info__name">Hello, {authorizedUser.name}</p>
              <p className="user-info__email">Email: {authorizedUser.email}</p>
            </div>
            <a onClick={this.signOut} href="" className="sign-out">Sign out</a>
          </div>
        </header>
        <section className="user-list-container">
          <h1>Users</h1>
          <ul className="users-list">
            {usersList && usersList.map((userItem) => {
              return (
                <li key={userItem.id.toString()} className="user-list__item">
                  <span className="user-list__item__description">
                    Name: {userItem.name}, email: {userItem.email}
                  </span>
                  <button
                    onClick={() => this.props.deleteUser(userItem.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={this.showModal}
            className="add-button"
          >
            Create user
          </button>
        </section>
        <Modal
          submitHandler={this.createUser}
          isModalVisible={this.state.isModalVisible}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}
