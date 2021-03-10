import React, { Component } from 'react';
import './UsersPanel.css';
import UsersList from './UsersList';

class UsersPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  };

  addUser = event => {
    event.preventDefault();

    let newUser = {
      id: Date.now(),
      name: this.inputName.value
    };

    this.setState(state => {
      return ({
        users: state.users.concat(newUser)
      });
    });

    this.inputName.value = '';
  };

  removeUser = userId => {
    this.setState(state => {
      return ({
        users: state.users.filter(user => user.id !== userId)
      });
    });
  };

  render() {
    return (
      <div className="users-panel">
        <form onSubmit={this.addUser}>
          <input ref={element => { this.inputName = element }} type="text" placeholder="Enter your name..." />
          <button type="submit">Add user</button>
        </form>
        <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
      </div>
    );
  };
};

export default UsersPanel;
