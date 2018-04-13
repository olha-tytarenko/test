import React, { Component } from 'react';

import { Modal } from './components';

export class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };

    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
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
          <a onClick={this.props.signOut} href="">Sign out</a>
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
            submitHandler={this.props.createUser}
            isModalVisible={this.state.isModalVisible}
            hideModal={this.hideModal}
          />
          <button onClick={this.showModal}>Create user</button>
        </section>
      </div>
    );
  }
}
